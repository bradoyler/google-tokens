# Google-tokens
Tool for getting Google Cloud API OAuth tokens (refresh token)

## Why?
- To simplify getting OAuth tokens
- As a alternative to [OAuth Playground](https://developers.google.com/oauthplayground/)
- [OAuth2 for Web Server Applications](https://developers.google.com/identity/protocols/OAuth2WebServer)

### Getting started
1. Sign-up for a [Google Cloud API](https://console.developer.google.com/) account and create an API project. 
1. [Create credentials](https://console.developers.google.com/apis/credentials) (OAuth client id) and add a '**Authorized redirect URI**' of `http://localhost:3000/callback`.
1. Obtain your `client_id` & `client_secret` for usage in next step  
Also...  
[See detailed instructions on how to create credentials](https://docs.google.com/document/d/1U0yc8okKCHqfo5KSeRCbLz0g6kmzDyTePicowXF4Ql4/edit?usp=sharing)

### Steps to generate `.gtokens.json`
1. `git clone https://github.com/bradoyler/google-tokens.git`
1. copy .gtokens.example.json to .gtokens.json
1. fill in `client_id` and `client_secret`
1. install & run
```
npm install
npm start
``` 
5. follow prompt and copy `refresh_token` to your '.gtokens.json'

## API
```javascript
const GoogleTokens = require('google-tokens')
const tokens = new GoogleTokens({ client_id, client_secret }) // OAuth credentials 

const scope = [
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.readonly'
]

tokens.authPrompt({ scope }) // required to pass API scope
  .then(tokens => console.log('OAuthTokens:', tokens))
  .catch(console.error)
```

#### NOTE: you will only get a `refresh_token` the first-time you authenticate, but you can force to get new tokens by using the 'prompt' option, like so:

```javascript
tokens.authPrompt({ scope, prompt: 'consent' })
  .then(tokens => console.log('OAuthTokens:', tokens))
```

Or you can run:

```sh
npm run refresh
```

----

#### TODOs:
- add CLI support
- allow for using shortnames (ie. `auth/drive` ) in scope
- tests for all options 
