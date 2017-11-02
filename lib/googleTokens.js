const google = require('googleapis')

function GoogleTokens ({ redirect_uris: redirects = [''], client_id: id, client_secret: secret }) {
  if (!id || !secret) {
    throw new Error('Missing client_id or client_secret')
  }

  const { OAuth2 } = google.auth
  const redirectUrls = (redirects && redirects[0]) ? redirects[0] : ['']
  this.oauth2Client = new OAuth2(id, secret, redirectUrls)
  // this.sheets = google.sheets({ version: 'v4', auth: this.oauth2Client })
}

GoogleTokens.prototype.generateAuthUrl = function generateAuthUrl ({ scope, accessType = 'offline' }) {
  const oauth2Client = this.oauth2Client
  return new Promise(function (resolve) {
    const url = oauth2Client.generateAuthUrl({
      access_type: accessType,
      scope
    })
    resolve(url)
  })
}

GoogleTokens.prototype.getTokens = function getTokens ({ code }) {
  return new Promise(function (resolve) {
    resolve({refresh_token: ''})
  })
}

module.exports = GoogleTokens
