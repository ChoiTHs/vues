<template>
  <h2>Root App.vue page</h2>
  <input type="text" ref="myId" placeholder="id를 입력하세요"><!-- vue.js -->
  <!-- <input type="text" id="myId" name="myId" placeholder="id를 입력하세요"> --><!-- ES6 -->
  <button @click="loginInput">로그인</button>
  <hr>
  <LocalChild></LocalChild>
  <hr>
  <GlobalChild />

</template>

<script>

import LocalChild from './components/LocalChild.vue';

export default {
  methods:{
    loginInput(){
      console.log(this.$refs.myId.value) // vue.js
      // console.log(document.getElementById('myId').value) // ES6
    }
  },
  components: {
    LocalChild,
  }
}
</script>

<style>

</style>
