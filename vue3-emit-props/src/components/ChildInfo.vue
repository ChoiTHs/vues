<!-- html -->
<template>
    <div>
        <h1>info.vue</h1>
        <p>Name = {{ name }}</p>
        <p>Age = {{ age }}</p>
        <button @click="propsChange">age change</button>
    </div>
</template>

<!-- javascript -->
<script>
export default{
    props: ["name", "age"],
    created(){
        console.log(this.name);
    },

    methods:{
        propsChange(){
            this.$emit('ageChange', 33);
        }
    }
}
</script>

<!-- css, scss -->
<style>
</style>
