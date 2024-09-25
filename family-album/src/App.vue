<template>
  <div id="app">
    <img v-on:click.left.shift="changeImg" v-bind:src="imgUrl" alt="animal image"><br>
    <button v-on:click="addAnimal">+1</button>
    <p>이미지는 동물 이미지로 사용했어요</p>
    <p>Press the 'Shift' keyboard key while you do a left mouse button click on the image below to change it.</p>
    <br>
    <li>Tigers: {{ tigers }}</li>
    <li>Moose: {{ moose }}</li>
    <li>Kangaroos: {{ kangaroos }}</li>

  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {

    const tigers = ref(0);
    const moose = ref(0);
    const kangaroos = ref(0);

    const images = [{ animal: 'tigers', src: require('@/assets/img_tiger.jpeg') },
    {animal: 'moose', src: require('@/assets/img_moose.jpeg')},
    {animal: 'kangaroos', src: require('@/assets/img_kangaroo.jpeg')}
    ];

    const imgUrlIndex = ref(0);
    const imgUrl = ref(images[0].src);

    const currentAnimal = ref(images[0].animal);

    // 이미지를 변경하는 함수 (Shift + 클릭 시)
    const changeImg = () => {
      imgUrlIndex.value++;
      if (imgUrlIndex.value >= images.length) {
        imgUrlIndex.value = 0;
      }
      // 이미지 변경 및 현재 동물 업데이트
      imgUrl.value = images[imgUrlIndex.value].src;
      currentAnimal.value = images[imgUrlIndex.value].animal;
    };

    const addAnimal = () => {
      if (currentAnimal.value === 'tigers') {
        tigers.value++;
      } else if (currentAnimal.value === 'moose') {
        moose.value++;
      } else if (currentAnimal.value === 'kangaroos') {
        kangaroos.value++;
      }
    };

    return {
      imgUrl,
      changeImg,
      tigers,
      moose,
      kangaroos,
      addAnimal
    };
  },
  };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app > img {
  width: 80%;
}
</style>