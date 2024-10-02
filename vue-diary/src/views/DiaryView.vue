<template>
    <div>
      <h1>Diary 목록</h1>
  
      <!-- 새 일기 작성 -->
      <div>
        <input v-model="newDiary.content" placeholder="일기를 작성하세요" />
        <select v-model="newDiary.priority">
          <option value="상">상</option>
          <option value="중">중</option>
          <option value="하">하</option>
        </select>
        <select v-model="newDiary.status">
          <option value="완료">완료</option>
          <option value="진행 중">진행 중</option>
          <option value="미완료">미완료</option>
        </select>
        <button @click="addNewDiary">추가</button>
      </div>
  
      <!-- 일기 목록 -->
      <ul>
        <li v-for="diary in diaries" :key="diary.id">
          <!-- 수정 모드 -->
          <div v-if="editIndex === diary.id">
            <input v-model="editDiary.content" />
            <select v-model="editDiary.priority">
              <option value="상">상</option>
              <option value="중">중</option>
              <option value="하">하</option>
            </select>
            <select v-model="editDiary.status">
              <option value="완료">완료</option>
              <option value="진행 중">진행 중</option>
              <option value="미완료">미완료</option>
            </select>
            <button @click="saveDiaryChanges(diary.id)">저장</button>
            <button @click="cancelEdit">취소</button>
          </div>
  
          <!-- 일반 모드 -->
          <div v-else>
            <strong>{{ diary.createdAt }}</strong> - {{ diary.content }}
            <span>[중요도: {{ diary.priority }}]</span>
            <span>[상태: {{ diary.status }}]</span>
            <button @click="enterEditMode(diary)">수정</button>
            <button @click="deleteDiary(diary.id)">삭제</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  // Vuex 스토어 인스턴스 가져오기
  const store = useStore();
  
  // 새 일기 작성 변수
  const newDiary = ref({
    content: '',
    priority: '중',
    status: '미완료',
    createdAt: new Date().toISOString().slice(0, 10), // 오늘 날짜
  });
  
  // 수정 모드 관련 변수
  const editIndex = ref(null);  // 수정 중인 일기의 ID
  const editDiary = ref({});    // 수정할 일기 데이터를 저장
  
  // diary 목록을 Vuex에서 가져오기
  const diaries = computed(() => store.state.diary);
  
  // 컴포넌트가 마운트되었을 때 diary 목록 로드
  onMounted(() => {
    store.dispatch('Fetch_Diary');
  });
  
  // 새 일기 추가 함수
  const addNewDiary = () => {
    if (newDiary.value.content) {
      store.dispatch('Add_Diary', { ...newDiary.value });
      newDiary.value.content = '';  // 추가 후 입력 필드 초기화
      newDiary.value.priority = '중';
      newDiary.value.status = '미완료';
    } else {
      alert('일기 내용을 입력하세요.');
    }
  };
  
  // 수정 모드로 진입하는 함수
  const enterEditMode = (diary) => {
    editIndex.value = diary.id;       // 수정할 일기의 ID 설정
    editDiary.value = { ...diary };   // 수정할 일기 데이터를 복사하여 저장
  };
  
  // 수정 저장 함수
  const saveDiaryChanges = (id) => {
    store.dispatch('Update_Diary', { id: id, diary: editDiary.value });  // 수정된 일기 저장
    editIndex.value = null;  // 수정 모드 종료
  };
  
  // 수정 취소 함수
  const cancelEdit = () => {
    editIndex.value = null;  // 수정 모드 종료
  };
  
  // 일기 삭제 함수
  const deleteDiary = (id) => {
    if (confirm('정말로 삭제하시겠습니까?')) {
      store.dispatch('Delete_Diary', id);
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: #333;
  }
  
  input {
    margin-right: 10px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  button {
    margin-left: 10px;
  }
  </style>