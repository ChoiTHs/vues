<template>

  <FancyButton>
    <!-- <strong>눌러봐!</strong> -->
     <!-- 디폴트 아닙니다. -->
      {{ btnName }}
  </FancyButton>

  <MainLayout>
    <template #header>
      <h2>Header</h2>
    </template>

    <template #default>
      <h2>Contents!!!!!!!!</h2>
    </template>

    <template #footer>    <!--  <template v-slot:footer> -->
      <h2>Footer</h2>
    </template>

  </MainLayout>

  <hr>
  <h2>부모1 </h2>
  <p>App.vue</p>

  <ChildTwo /> <hr color="red">

</template>

<script setup>
import { provide, ref } from 'vue';
import ChildTwo from './components/ChildTwo.vue';
import FancyButton from './components/FancyButton.vue';
import MainLayout from './components/MainLayout.vue';

const btnName = ref('클릭해줘!5555')

const location = ref('북극')

function updateLocation() {
  location.value = '남극222'
}

provide('location', {
  location,
  updateLocation
})
</script>



<!-- <template>
  <h1>App.vue Page</h1>

  <GlobalChild v-if="count == 2" />
  <hr>
  <h3>Count : {{ count }}</h3>
  <button @click="countIncrement">Count++</button>&nbsp;&nbsp;
  <button @click="countDicrement">Count--</button>
</template>

<script>
import { ref } from 'vue';

export default {
  data(){
    return {
      count: ref(1)
    }
  },
  template: {

  },
  methods: {
    countIncrement() {
      this.count++;
    },
    countDicrement(){
      this.count--;
    }
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
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

}
</script> -->

<!-- 
https://ko.vuejs.org/guide/essentials/lifecycle
https://developerjournal.tistory.com/5

beforeCreate: 인스턴스가 생성되고 반응성 속성이 설정되기 전에 호출됩니다.
created: 인스턴스가 생성되고 반응성 속성이 설정된 후에 호출됩니다.
beforeMount: 인스턴스가 마운트되기 직전에 호출됩니다.
mounted: 인스턴스가 마운트된 직후에 호출됩니다.
beforeUpdate: 데이터가 변경되어 가상 DOM이 다시 렌더링되기 전에 호출됩니다.
updated: 가상 DOM이 다시 렌더링된 후에 호출됩니다.
beforeUnmount: 인스턴스가 해제되기 전에 호출됩니다.
unmounted: 인스턴스가 해제된 후에 호출됩니다. -->
