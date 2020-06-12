<template>
  <div class="container">
      <h3>Welcome {{user.profile.username}} !</h3>
      <pre>User object: {{JSON.stringify(user, null, 2)}} </pre>
    </div>
</template>

<script>
import auth from "../auth/index";
export default {
  name: "Profile",
  data() {
    return {
      user: null
    };
  },
  created() {
    this.user = auth.user;
  }
};
</script>

<style>
</style>