<template>
  <div class="container">
    <p>You must log in to view the page</p>
    <button class="btn btn-primary" @click="$auth.login()">Log in</button>
  </div>
</template>

<script>
export default {
  name: 'Unauthorized'
}
</script>
