<template>
  <div>
    <form @submit.prevent="submitForm">
      <table>
        <tbody>
          <tr>
            <td>
              <label for="id">ID</label> : 
              <input type="text" id="id" v-model="id" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="name">이름</label> : 
              <input type="text" id="name" v-model="name" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="email">email</label> : 
              <input type="text" id="email" v-model="email" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="password">비밀번호</label> : 
              <input type="password" id="password" v-model="password" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="passwordConfirm">비밀번호 확인</label> :
              <input type="password" id="passwordConfirm" v-model="passwordConfirm" />
            </td>
          </tr>
        </tbody>
      </table>

      <!-- 버튼은 테이블 밖에 배치 -->
      <button type="submit">회원가입</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    };
  },
  methods: {
    submitForm() {
      // 회원가입 폼 처리 로직
      console.log("Form submitted");
    },
  },
};
</script>