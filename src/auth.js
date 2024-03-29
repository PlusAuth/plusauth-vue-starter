import { OIDCClient } from '@plusauth/plusauth-oidc-client-js'

const Auth = new OIDCClient({
  issuer: import.meta.env.VITE_APP_OIDC_ISSUER,
  client_id: import.meta.env.VITE_APP_CLIENT_ID,
  redirect_uri: 'http://localhost:8080/callback',
  response_mode: 'form_post',
  response_type: 'id_token token',
  post_logout_redirect_uri: 'http://localhost:8080/',
  autoSilentRenew: true,
  checkSession: true,
  requestUserInfo: true,
  scope: 'openid profile',
  silent_redirect_uri: 'http://localhost:8080/silent-renew'
})

export { Auth }
