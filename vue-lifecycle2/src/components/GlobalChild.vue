<template>
    <h2>전역 컴포넌트</h2>
</template>

<script>
export default {
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

<style scoped>
h2 { color: rgb(0, 255, 34);}
</style>