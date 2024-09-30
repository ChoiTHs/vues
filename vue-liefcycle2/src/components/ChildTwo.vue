<script setup>
import { inject } from 'vue';

const { location, updateLocation } = inject('location')
</script>

<template>

 <h2>자손2 </h2>
  <p>ChildTwo.vue</p>

  <button @click="updateLocation">{{ location }}</button>
</template>