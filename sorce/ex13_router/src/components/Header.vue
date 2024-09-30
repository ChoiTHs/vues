<template>
    <header>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/services">Services</router-link>
            <router-link to="/contact">Contact</router-link>
        </nav>
    </header>
</template>

<script setup>

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

​nav a:hover {
text-decoration: underline;
}
</style>