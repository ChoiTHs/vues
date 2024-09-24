<!-- html -->
<template>
  <div id="app">
    <!-- <h1 v-on:click="click_count()">count = {{ count }}</h1> -->
    <h1 @click="click_count">count = {{ count }}</h1>
    <div v-if="count > 5">
      5보다 커요!!!
    </div>
    <ul>
      <li v-for="furit in furits" :key="furit">
        {{ furit }}
      </li>
    </ul>
  </div>
</template>

<!-- javascript -->
<script>
export default({
  data() {
    return {
      count: 0,
      furits: ['Apple', 'Banana', 'Coconut']
    }
  },
  methods: {
    click_count(){
      this.count += 1;
    }
  }
})
</script>

<!-- css, scss -->
<style>
h1{
  font-size: 50px;
  color: royalblue;
}
ul{
  li{font-size: 40px;}

}
</style>
