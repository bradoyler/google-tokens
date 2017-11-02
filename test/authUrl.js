const GoogleTokens = require('../index')

console.log('>>', GoogleTokens, typeof GoogleTokens)

const id = '929244674536-vmchqn76iasg1t8tm3u1i82jasgok76o.apps.googleusercontent.com'
const secret = 'AUOyTSFr1cKC85h7r6BAUmdG'
const redirects = ['https://developers.google.com/oauthplayground']
const tokens = new GoogleTokens({client_id: id, client_secret: secret, redirect_uris: redirects})

tokens.generateAuthUrl({
  scope: [
    'https://www.googleapis.com/auth/spreadsheets.readonly',
    'https://www.googleapis.com/auth/drive.readonly'
  ]
})
.then(url => console.log('Goto Auth URL:', url))
.catch(console.error)
