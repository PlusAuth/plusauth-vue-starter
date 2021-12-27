<template>
  <div class="jumbotron">
    <div class="container">
      <h1 class="display-3">Hello, world!</h1>
      <p>
        This is a template for a simple login/register system. It includes the
        OpenID Connect Implicit Flow. To view Profile page please login.
      </p>
      <p>
        <router-link v-if="user" class="btn btn-success btn-lg" to="/profile"
          >View Profile &raquo;</router-link
        >
        <button v-else class="btn btn-primary btn-lg" @click="$auth.login()">
          Login/Register &raquo;
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
