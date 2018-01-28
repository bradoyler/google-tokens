> ## Not working due to Google app verification restrictions

# Google-tokens
Tool for getting my Google API OAuth tokens (refresh token)

## Why?
- To simplify getting OAuth tokens
- As a alternative to [OAuth Playground](https://developers.google.com/oauthplayground/)
- [OAuth2 for Web Server Applications](https://developers.google.com/identity/protocols/OAuth2WebServer)

## API
```javascript
const GoogleTokens = require('google-tokens')
const tokens = new GoogleTokens({client_id, client_secret, redirect_uris})
tokens.get({
  SCOPE:['spreadsheets.readonly', 'drive.readonly']
})
.then(tokens => console.log('OAuthTokens:', tokens))
.catch(console.error)
```

### TODO:

#### CLI  
Get your OAuth `client_id` & `client_secret` from the [Google API console](https://console.developers.google.com/apis/credentials)

```
$ npx google-tokens -id 1234 -secret 5h7r6BAUmdG -cs -s spreadsheets.readonly,drive.readonly
```
