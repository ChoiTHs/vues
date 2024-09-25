<!-- html -->
<template>
  <div id="app">
    <!-- <h1 v-on:click="click_count()">count = {{ count }}</h1> -->
    <h1 @click="click_count">count = {{ count }}</h1>
    <div id="check5" v-if="count > 5">
      5보다 커요!!!
    </div>
    <h2>Furit.vue</h2>
    <ul>
      <Fruit v-for="furit in furits" :key="furit" :name="furit">
      </Fruit>
    </ul>
    <h2>App.vue</h2>
    <ul>
      <li v-for="furit in furits" :key="furit">
        {{ furit }}
      </li>
    </ul>
    <Hello />
  </div>
</template>

<!-- javascript -->
<script>
import Fruit from './components/Fruit.vue';
import Hello from './components/HelloWorld.vue'

export default({
  components:{
    Fruit,
    Hello
  },
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
<style lang="scss">
h1{
  font-size: 50px;
  color: royalblue;
}
#app{
  ul{
    li{
      font-size: 40px;
    }
  }
}
</style>
