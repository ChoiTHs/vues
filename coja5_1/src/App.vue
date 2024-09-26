<template>
  <first-child v-if="visible" />
</template>

<script>
import FirstChild from '@/components/FirstChild.vue';
export default {
  name: 'App',
  components: {
    FirstChild,
  },
  data(){
    return{
      visible: true,
    };
  },
  created(){
    setTimeout(() => {
      this.visible = false;
    }, 3000);
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
