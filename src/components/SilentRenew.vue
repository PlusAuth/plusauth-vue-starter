<template> </template>

<script>
import { OIDCClient } from '@plusauth/plusauth-oidc-client-js'
export default {
  name: 'SilentRenew',
  async mounted() {
    await new OIDCClient({
      issuer: import.meta.env.VITE_APP_OIDC_ISSUER
    }).loginCallback()
  }
}
</script>
<style scoped></style>
