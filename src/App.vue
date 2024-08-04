<!-- src/App.vue -->
<template>
  <div id="app">
    <Header v-if="$route.meta.showHeader" />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
  // computed: {
  //   showHeader() {
  //     return this.$route.name !== 'Login'
  //   }
  // }
}
</script>

<style>
/* Add any global styles here */
body {
  margin: 0;
}

html,
body,
#app {
  height: 100%;
}
</style>
