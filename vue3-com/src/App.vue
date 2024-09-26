<!-- html -->
<template>
  <h1>컴퓨티드 1번</h1>
  <input type="checkbox" v-model="ok" name="체크박스" >{{ okMethod }}
  <hr><br><br>
  <h1>컴퓨티드 2번</h1>
  <div>
    <p>Full Name : {{ fullName }}</p>
    <input type="text" v-model="fullName" placeholder="이름을 입력하세요">
    <hr><br><br>
    firstName = {{ firstName }}<br>
    lastName = {{ lastName }}
</div>
</template>

<!-- javascript -->
<script>
export default{
  data(){
    return{
      ok: false,
      firstName: 'Yuna',
      lastName: 'Kim',
    }
  },
  computed:{
    okMethod(){
      if(this.ok === true){
        return "예";
      } else {
        return "아니오";
      }
    },
    fullName:{
      get(){
        return this.firstName + " " + this.lastName;
      },
      set(newName){
        const names = newName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
      },
    }
  }
}
</script>
