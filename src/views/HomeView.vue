<template>
  <main>
    <h1>Home</h1>
  </main>
</template>

<script>
export default {
  name: "home",
  data() {
    return {

    }
  },
  computed: {
    user() {
      return this.$store.state.auth.token
    },
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  }
  
}
</script>