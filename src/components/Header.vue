<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="/">PlusAuth Starter</a>
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto"></ul>
        <template v-if="user">
          <li class="nav-item navbar-nav">
            <router-link class="nav-link" to="/profile">{{
              `Logged in as: ${userDisplayName}`
            }}</router-link>
          </li>
          <button class="btn btn-link" @click="$auth.logout()">Logout</button>
        </template>
        <li v-else class="nav-item navbar-nav">
          <button class="btn btn-link" @click="$auth.login()">Login</button>
        </li>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  /* We can't extract user object from auth since header is rendered before
    Router.beforeEach runs (which is where the auth check is done).
    This way when auth.user is set, the view will react to it. */
  data() {
    return {
      user: null
    }
  },
  computed: {
    userDisplayName() {
      if (!this.user) {
        return null
      } else {
        if (!this.user.given_name || !this.user.family_name) {
          return this.user.username || this.user.email || this.user.sub
        }
        return `${this.user.given_name} ${this.user.family_name}`
      }
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
