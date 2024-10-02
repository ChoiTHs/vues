import { createStore } from 'vuex'
import { deleteTodo, fetchDiary, fetchedTodoList, deleteDiary, addDiary, updateDiary } from '@/API/index.js'

export default createStore({
  state: {
    todo:[],
    diary: [],
  },
  getters: {
  },
  mutations: {
    SET_TODO(state, data){
      state.todo = data;
    },
    SET_DIARY(state, data){
      state.diary = data
    }
  },
  actions: {
    Fetch_Todo({ commit }){
      fetchedTodoList()
      .then(({data}) => {commit('SET_TODO', data)})
      .catch(error => (console.log(error)));
    },
    Delete_Todo({ commit }, id) {
      deleteTodo(id)
        .then(() => {
          return fetchedTodoList();
        })
        .then(({ data }) => {
          commit('SET_TODO', data);
        })
        .catch(error => console.log(error));
    },
    Fetch_Diary({ commit }){
      fetchDiary()
      .then(({data}) => { commit(`SET_DIARY`, data)})
      .catch(err => (console.log(err)));
    },
    Delete_Diary({ dispatch }, id){
      deleteDiary(id)
      .then( () => { dispatch('Fetch_Diary')})
      .catch(err => (console.log(err)));
    },
    Add_Diary({ dispatch }, newDiary){
      addDiary(newDiary)
      .then(() => { dispatch('Fetch_Diary')})
      .catch(err => (console.log(err)));
    },
    Update_Diary({ dispatch }, {id ,diary}) {
      updateDiary(id, diary)
        .then(() => {
          dispatch('Fetch_Diary'); 
        })
        .catch(error => console.log(error));
    }
  },
  modules: {
  }
})
