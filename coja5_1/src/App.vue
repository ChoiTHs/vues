<template>
  <first-child />
</template>

<script>
import FirstChild from './components/FirstChild.vue';
export default {
  name: 'App',
  components: {
    FirstChild,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
