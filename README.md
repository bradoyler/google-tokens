# Google-tokens
Tool for getting Google Cloud API OAuth tokens (refresh token)

## Why?
- To simplify getting OAuth tokens
- As a alternative to [OAuth Playground](https://developers.google.com/oauthplayground/)
- [OAuth2 for Web Server Applications](https://developers.google.com/identity/protocols/OAuth2WebServer)

### Getting started
1. Sign-up for a [Google Cloud API](https://console.developer.google.com/) account.
1. Create an API project with an OAuth client id and add a '**Authorized redirect URI**' of `http://localhost:3000/callback`.
1. Obtain your `client_id` & `client_secret` from the credentials JSON file from the [console](https://console.developers.google.com/apis/credentials)

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

##### NOTE: you will only get a `refresh_token` the first-time you authenticate, but you can force to get new tokens by using the 'prompt' option, like so:

```javascript
tokens.authPrompt({ scope, prompt: 'consent' })
  .then(tokens => console.log('OAuthTokens:', tokens))
```

----

#### TODOs:
- add CLI support
- allow for using shortnames (ie. `auth/drive` ) in scope
- tests for all options 