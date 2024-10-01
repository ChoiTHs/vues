<template>
    <div>
        About

        <p>{{ $route.path }}</p>
        <p>{{ $route.name }}</p>

        <button @click="goServicesView">Service 페이지</button>
    </div>
</template>

<script setup>
import { useRouter} from 'vue-router';

const router = useRouter();
const goServicesView = () => {
    router.push('/services')
}
</script>

<style scoped>

</style>