<template>
  <div class="container">
    <p>You must log in to view the page</p>
    <button class="btn btn-primary" @click="signin">Log in</button>
  </div>
</template>

<script>
import userManager from "../auth/userManager";

export default {
  name: "Unauthorized",
  methods: {
    signin() {
      userManager.signinRedirect();
    }
  }
};
</script>

<style>
</style>