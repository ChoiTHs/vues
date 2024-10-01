<template>
  <div class="container">
    <div>

      <b-button pill class="outline-success ms-3" variant="primary" @click="isModal = true">데이터 입력</b-button>
      <b-button pill class="outline-success ms-3" variant="info" @click="outputData">데이터 호출</b-button>
      <div v-show="isModal">
        <form>
          <label class="form-level">Name</label>
          <input class="form-control" type="text" v-model="name">

          <label class="form-level">E-mail</label>
          <input class="form-control" type="email" v-model="email">

          <b-button variant="success" class="btn outline-success mt-3 ms-3" type="button" @click="inputData">저장</b-button>
          <b-button variant="danger" class="btn outline-success mt-3 ms-3" type="button" @click="isModal = false">취소</b-button>
        </form>
      </div>
      <!-- case 3 -->
      <div ref="table" >
        <table class="table ms -3" v-show="isOpen">
          <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Button</th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="item in members" :key="members.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td>
                <b-button variant="warning" type="button" @click="updateData(item.id)" class="btn outline-success">수정</b-button>
                <b-button variant="danger" type="button" @click="deleteData(item.id)" class="btn outline-success">삭제</b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> 
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const baseUrl = 'http://localhost:3000/';
const table = ref(null);
let name = ref(null);
let email = ref(null);
const members = ref([]);

const isOpen = ref(false);
let isModal = ref(false);

const inputData = async() => {
  // case 1
  // axios.post(`${baseUrl}member`, {
  //   name:"테스트",
  //   email:"test@test.com"
  // })
  // .then(response => {
  //   console.log(response.data);
    
  // })
  // .catch(error => (console.log(error)))

  // case 2
  // const res = await axios.post(`${baseUrl}member`, {
  //   name: name.value,
  //   email: email.value,
  // })
  // .catch(error => (console.log(error)))
  
  // case 3
  try {
    const res = await axios.post(`${baseUrl}member`, {
      name: name.value,
      email: email.value,
    })
    name.value='';
    email.value='';
    outputData();
    isModal.value = false;
  } catch (error) {
    console.log(error)
  }
  
}

const outputData = async () => {
  // case 3
  const res = await axios.get(`${baseUrl}member`);
  isOpen.value = !isOpen.value;
  members.value = res.data;
  // case 1
  // axios.get(`${baseUrl}member`)
  // .then(response => {
  //   const members = response.data;
  //   let htmlContent =
  //     `<table class="table" border="1">
  //       <tr>
  //         <th>ID</th>
  //         <th>Name</th>
  //         <th>E-mail</th>
  //       </tr>`;
    
  //   // members 배열 순회
  //   members.forEach(member => {
  //     htmlContent += `
  //       <tr>
  //         <td>${member.id}</td>
  //         <td>${member.name}</td>
  //         <td>${member.email}</td>
  //       </tr>
  //     `;
  //   });
    
  //   htmlContent += `</table>`;
  //   table.value.innerHTML = htmlContent;
  // })

  // case 2
  // const res = axios.get(`${baseUrl}member`)
  // .then(response => {
  //   const members = response.data;
  //   let htmlContent =
  //     `<table class="table" border="1">
  //       <tr>
  //         <th>ID</th>
  //         <th>Name</th>
  //         <th>E-mail</th>
  //       </tr>`;
    
  //   // members 배열 순회
  //   members.forEach(member => {
  //     htmlContent += `
  //       <tr>
  //         <td>${member.id}</td>
  //         <td>${member.name}</td>
  //         <td>${member.email}</td>
  //       </tr>
  //     `;
  //   });
    
  //   htmlContent += `</table>`;
  //   table.value.innerHTML = htmlContent;
  // })  
}



const deleteData = async (userId) => {
  const isOk = confirm('삭제합니다?');
  try{
    if(isOk){
      const res = await axios.delete(`${baseUrl}member/${userId}`);
      const res2 = await axios.get(`${baseUrl}member`);
      members.value = res2.data;
    }
  } catch(err){
    console.log(err);    
  }
}

const updateData = async(userId) => {
  const putName = prompt("이름을 입력해주세요.");
  const putEmail = prompt("Email을 입력해주세요.")

  const isOk = confirm('수정합니다?');
  try{
    if(isOk){
    const res = await axios.put(`${baseUrl}member/${userId}`,{
        name: putName, // 입력받은 이름
        email: putEmail // 입력받은 이메일
    })
    const res2 = await axios.get(`${baseUrl}member`);
    members.value = res2.data;
    }
  }catch(err){
    console.log(err);    
  }
}

</script>

<style scoped>
div{
  margin: 8px;
}
</style>