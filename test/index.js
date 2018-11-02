const GoogleTokens = require('../index')
const fs = require('fs')
const path = require('path')
const config = JSON.parse(fs.readFileSync(path.join(process.cwd(), '.gtokens.json'), 'utf8'))

const tokens = new GoogleTokens(config.web)

const scope = [
  'https://www.googleapis.com/auth/spreadsheets.readonly',
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.readonly'
]

const prompt = (process.argv[2] ==='--refresh') ? 'consent' : '';

tokens.authPrompt({ scope, prompt })
  .then(res => console.log('credentials >>', res.credentials))
  .catch(console.error)
