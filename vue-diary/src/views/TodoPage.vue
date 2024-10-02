<template>
    <div class="todo">
        <TodoList
        :computed-todo="computedTodo"
        @delete-todo="deleteTodo"
        @update-todo="updateTodo"
        />
        <TodoInput @add-todo="addTodo" />
    </div>
</template>
<script>
import axios from "axios";
import TodoList from "@/views/TodoList.vue";
import TodoInput from "@/views/TodoInput.vue";
export default {
  components: {
    TodoList,
    TodoInput,
  },
  computed: {
    computedTodo() {
        return this.$store.state.todo;
    },
  },
  methods: {
    async addTodo(inputMsg) {
      await axios.post(`http://localhost:3000/todo`, {
        msg: inputMsg,
        completed: false,
    })
    },
    updateTab(tab) {
      this.current = tab;
    },
    deleteTodo(id) {
      this.$store.dispatch(`Delete_Todo`, id);
    },
    // updateTodo(id) {
    // },
  },
  created(){
    this.todo = this.$store.dispatch(`Fetch_Todo`);
  },
  beforeUpdate(){
    this.todo = this.$store.dispatch(`Fetch_Todo`);
  }
};
</script>