<template>
  <h3>App.vue Page</h3>
  <h4>Number : {{ num }}</h4>
  <button @click="numIncrement">Number++</button> &nbsp;&nbsp;
  <button @click="numDeincrement">Number--</button>


  <ChildComponent v-if="num === 2" />

</template>

<script>

export default {
    data(){
      return{
        num: 0
      }
    },
    beforeCreate(){
      console.log('beforeCreate');
    },
    created(){
      console.log('created');
    },
    beforeUnmount() {
      console.log('beforeUnmount');
    },
    mounted(){
      console.log('mounted');
    },
    beforeUpdate(){
      console.log('beforeUpdate');
    },
    updated(){
      console.log('updated');
    },
    deforeUnmount(){
      console.log('deforeUnmount');
    },
    unmounted(){
      console.log('unmounted');
    },
    methods: {
      numIncrement(){
        this.num++;
      },
      numDeincrement(){
        this.num--;
      }
    },

}
</script>

<style>

</style>
