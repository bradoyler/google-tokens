const GoogleTokens = require('../index')

console.log('>>', GoogleTokens, typeof GoogleTokens)

const id = '929244674536-vmchqn76iasg1t8tm3u1i82jasgok76o.apps.googleusercontent.com'
const secret = 'AUOyTSFr1cKC85h7r6BAUmdG'
const redirects = ['https://developers.google.com/oauthplayground']
const tokens = new GoogleTokens({client_id: id, client_secret: secret, redirect_uris: redirects})

tokens.getTokens({ code: '' })
.then(tokens => console.log('OAuth tokens:', tokens))
.catch(console.error)
