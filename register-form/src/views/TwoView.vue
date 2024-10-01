<!-- html -->
<template>
    <div>
        <h1>TwoView.vue page</h1>
        <button @click="goOneView">OneView</button>
    </div>
</template>

<script setup>
import { useRouter} from 'vue-router';

const router = useRouter();
const goOneView = () => {
    router.push('/one-view')
}
</script>