<!-- html -->
<template>
    <div>
        <h3>Child Component</h3>
        <p>직업 : {{ job }}</p>
        <p>이름 : {{ yourname }}</p>
        점수 : <input v-model="scoreInput" @input="emitScore" placeholder="Enter score">
    </div>
</template>

<!-- javascript -->
<script>
export default {
    data() {
        return {
            scoreInput: '' 
        }
    },
    methods: {
        emitScore() {
            this.$emit('updateScore', this.scoreInput);
        }
    },
    props: ['job', 'yourname'],
}
</script>

<!-- css, scss -->
<style>
</style>
