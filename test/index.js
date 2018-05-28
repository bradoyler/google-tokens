const GoogleTokens = require('../index')
const fs = require('fs')
const path = require('path')
const config = JSON.parse(fs.readFileSync(path.join(process.cwd(), '.gtokens.json'), 'utf8'))

const tokens = new GoogleTokens(config.web)

const scopes = [
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.readonly'
]

tokens.authenticate({ scopes })
  .then(res => console.log('OAuth2 creds:', res))
  .catch(console.error)
