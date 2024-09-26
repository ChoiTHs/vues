<!-- html -->
<template>
    <div>
        <p>나는 자식 컴포넌트!!!</p>
        <button @click="$emit('createPost')">부모 컴포넌트에 이벤트 호출</button>
        <hr><br>
        <h1>데이터 보내기!!!</h1>
        <input type="text" ref="myInput" v-model="num"><button @click="$emit('numPost', num)">부모 컴포넌트에 이벤트 호출</button>
    </div>
</template>

<!-- javascript -->
<script>
export default{
    data(){
        return{
            num: 30,
        }
    }
}
</script>

<!-- css, scss -->
<style>
</style>
