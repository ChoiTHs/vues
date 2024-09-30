<template>
  <h1>App.vue</h1>
  <child />
  <hr><br>
  <h3>Count : {{ count }}</h3>
  <button @click="countInc">++</button>
  <button @click="countDic">--</button>
</template>

<script>
export default {
  data(){
    return{
      count: 0
    }
  },
  methods:{
    countInc(){
      this.count += 1;
    },
    countDic(){
      this.count -= 1;
    }
  },
  beforeCreate(){
    console.log('Child beforeCreate');
  },
  created(){
    console.log('Child created');
  },
  beforeUnmount() {
    console.log('Child beforeUnmount');
  },
  mounted(){
    console.log('Child mounted');
  },
  beforeUpdate(){
    console.log('Child beforeUpdate');
  },
  updated(){
    console.log('Child updated');
  },
  deforeUnmount(){
    console.log('Child deforeUnmount');
  },
  unmounted(){
    console.log('Child unmounted');
  },
}
</script>
