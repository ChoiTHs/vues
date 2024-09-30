<template>
  <h2>Root App.vue page</h2>

  <LocalChild></LocalChild>

  <GlobalChild />

</template>

<script>

import LocalChild from './components/LocalChild.vue';

export default {

  components: {
    LocalChild,
  }
}
</script>

<style>

</style>
