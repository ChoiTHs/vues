<template>
    <div>
        <h1>OneView.vue</h1>
        <button @click="goTwoView">TwoView</button>
    </div>
</template>

<script setup>
import { useRouter} from 'vue-router';

const router = useRouter();
const goTwoView = () => {
    router.push('/two-view')
}
</script>