<template>
  <div id="app">
    <NavBar v-if="isLogin"/>
    <router-view v-if="!isLogin" />
  </div>
</template>

<script>
import NavBar from './components/NavBar';
export default {
  components: {
    NavBar
  },
  computed: {
    isLogin() {
      let router = this.$router.app._route.path;
      let route;

      if(router == "/" || router == "/remmenber") {
        route = false;
      } else {
        route = true;
      }

      return route;
    }
  }
}
</script>


<style lang="scss">
:root {
  --colorBackground: rgb(45, 8, 73)
}

body {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>