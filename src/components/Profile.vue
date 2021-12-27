<template>
  <div class="container" v-if="user">
    <h3>Welcome {{ user.username }} !</h3>
    <pre>User object: {{ JSON.stringify(user, null, 2) }} </pre>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      user: null
    }
  },
  async created() {
    this.$auth.on('user_login', ({ user }) => {
      this.user = user
    })
    this.$auth.on('user_logout', () => {
      this.user = null
    })
    this.user = await this.$auth.getUser()
  }
}
</script>
