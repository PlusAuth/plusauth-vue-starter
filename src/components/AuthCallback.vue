<template>
  <div></div>
</template>
<script>
export default {
  name: 'AuthCallback',
  async mounted() {
    try {
      await this.$auth.loginCallback(window.location.href)
      this.$router.replace('/')
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style scoped></style>
