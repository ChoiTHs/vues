<!-- html -->
<template>
    <div id="myInformation">
    <p>직업 : <input v-model="job" /></p>
    <p>점수: {{ score }}</p>
    <p :class="passOrFailClass">{{ passOrFail }}</p>
    <Child :job="job" :yourname="yourname" @updateScore="updateScore"/>
  </div>

</template>

<!-- javascript -->
<script>
import Child from "./components/ChildInformation.vue"


export default{
  components:{
    Child,
  },
  data() {
    return {// 동적 바인딩
      parentAge: 22,
      score: 0,
      job: ''
    };
  },
  computed: {
    passOrFail() {
      if(this.score >= 70 && this.score <= 100) {
        return '합격';
      } else if(this.score >= 0 && this.score < 70) {
        return '불합격';
      } else {
        return '잘못 입력하셨습니다. 0~100까지 입력해주세요.';
      }
    },
    passOrFailClass() {
      if(this.score >= 70 && this.score <= 100) {
        return 'pass';
      } else if(this.score >= 0 && this.score < 70) {
        return 'fail';
      } else {
        return 'undefined';
      }
    }
  },
  methods: {
    ageIncrement() {
      this.parentAge++;
    },
    updateAge(newAge) {
      this.parentAge = newAge; 
    },
    updateScore(score) {
      this.score = score;
    }
  }
}
</script>

<!-- css, scss -->
<style>
</style>
