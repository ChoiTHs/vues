<!-- html -->
<template>
    <!-- <h1>test</h1> -->
    <li>{{ name }}</li>
</template>

<!-- javascript -->
<script>
export default{
    props:{
        name: {
            type: String,
            default: '',
        }
    },
    name: "CompoFruits"
}
</script>

<style lang="scss">
#check5{
    color: red !important;
}
</style>