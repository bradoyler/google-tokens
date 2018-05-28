const { google } = require('googleapis')
const http = require('http')
const url = require('url')
const querystring = require('querystring')
const opn = require('opn')
const destroyer = require('server-destroy')

class GoogleTokens {
  constructor ({ client_id: id, client_secret: secret, uri = 'http://localhost:3000/callback' }) {
    // create an oAuth client to authorize the API call
    this.oAuth2Client = new google.auth.OAuth2(id, secret, uri)
  }

  // Create http server to accept the oauth callback.
  async authenticate ({ scopes = [], prompt = '', access = 'offline' } = {}) { // eslint-ignore-line camelcase
    const scope = scopes.join(' ')
    return new Promise((resolve, reject) => {
      // grab the url that will be used for authorization
      this.authorizeUrl = this.oAuth2Client.generateAuthUrl({ prompt, access_type: access, scope })
      const server = http.createServer(async (req, res) => {
        try {
          if (req.url.indexOf('/callback') > -1) {
            const qs = querystring.parse(url.parse(req.url).query)
            res.end('Authentication successful! Please check your console for refresh token')
            server.destroy()
            const { tokens } = await this.oAuth2Client.getToken(qs.code)
            this.oAuth2Client.credentials = tokens
            resolve(this.oAuth2Client)
          }
        } catch (e) {
          reject(e)
        }
      }).listen(3000, () => {
        // open browser
        opn(this.authorizeUrl, {wait: false}).then(cp => cp.unref())
      })
      destroyer(server)
    })
  }
}

module.exports = GoogleTokens
