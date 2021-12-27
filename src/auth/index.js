import { OIDCClient } from '@plusauth/plusauth-oidc-client-js'

const auth = new OIDCClient({
  issuer: process.env.VUE_APP_OIDC_ISSUER,
  client_id: process.env.VUE_APP_CLIENT_ID,
  redirect_uri: process.env.VUE_APP_BASE_URL + 'callback',
  response_mode: 'form_post',
  response_type: 'id_token token',
  post_logout_redirect_uri: process.env.VUE_APP_BASE_URL,
  autoSilentRenew: true,
  checkSession: true,
  requestUserInfo: true,
  scope: 'openid profile',
  silent_redirect_uri: process.env.VUE_APP_BASE_URL + 'silent-renew.html'
})

export default auth
