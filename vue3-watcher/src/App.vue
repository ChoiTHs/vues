<!-- html -->
<template>
  <h1>Watcher 1</h1>
  <div>
    <p>Count : {{ count }}</p>
    <p>Result : {{ flag }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<!-- javascript -->
<script>
export default{
  data(){
    return{
      count: 0,
      flag: "짝수",
    }
  },
  methods:{
    increment(){
      this.count++;
    }
  },
  watch: {
    count:{
      handler(newVal, oldVal){
        console.log(`Count changed from ${oldVal} to ${newVal}`);
        if(newVal % 2 === 0){
          this.flag = "짝수"
        } else {
          this.flag = "홀수"
        }
      },
    },

  }
}
</script>

<!-- css, scss -->
<style>
</style>
