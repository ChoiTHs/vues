<template>
  <div id="app">
    {{ str }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "Hello!"
    };
  }
};
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