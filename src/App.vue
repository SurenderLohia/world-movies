<template>
    <router-view></router-view>
</template>

<style src="bulma/css/bulma.css"></style>
<style src="basscss/css/basscss.css"></style>
<style src="./assets/css/main.css"></style>
<script>
export default {
  name: 'App',
  data() {
    return {
      isAuthenticated: window.sessionStorage.getItem('isLoggedIn')
    }
  }
}


</script>