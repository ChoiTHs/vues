<!-- html -->
<template>
  <h1>부모 컴포넌트</h1>
  <p>부모의 num = {{ num }}</p>
  <ChildCompo @create-post="childFunc" @num-post="childFunc2" />
  <hr><br>
  <ChildInfo @ageChange="changeAge" v-bind:name="`김연아`" v-bind:age="age" />
</template>

<!-- javascript -->
<script>
import ChildCompo from "./components/ChildCompo.vue"
import ChildInfo from "./components/ChildInfo.vue"

export default{
  components: {
    ChildCompo,
    ChildInfo,
  },
  data(){
    return{
      num: 222,
      age: 22,
    }
  },
  methods: {
    childFunc(){
      console.log(`자식 컴포넌트에서 보낸 이벤트!!!`)
    },
    childFunc2(data){
      console.log(`자식 컴포넌트에서 보낸 이벤트!!!`, data);
      this.num = data;
    },
    changeAge(data){
      this.age = data;
    }
  },
}

</script>

<!-- css, scss -->
<style>
</style>
