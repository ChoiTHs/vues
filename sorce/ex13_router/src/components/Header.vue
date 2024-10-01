<template>
    <header>
        <nav>
            <router-link to="/" active-class="on">Home</router-link>
            <router-link to="/about" active-class="on">About</router-link>
            <router-link to="/services" active-class="on">Services</router-link>
            <router-link to="/contact" active-class="on">Contact</router-link>
        </nav>
    </header>
</template>

<script setup>
import '@/css/style.css'
</script>

<style scoped>
header {
    background-color: #333;
    padding: 10px;
}

nav a {
color: white;
margin-right: 15px;
text-decoration: none;
}

nav .on{
        font-weight: bold;
        color: #449e44;
    }

​nav a:hover {
text-decoration: underline;
}
</style>