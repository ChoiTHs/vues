<template>
    <div class="todo-list">
        <h3>Todo List</h3>
        <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" @remove="removeTodo(index)"/>

        <div class="input-group">
            <input type="text" v-model="newTodo" placeholder="Add a new task" />
            <button @click="addTodo">Add</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import TodoItem from './TodoItem.vue';

export default {
    components: { TodoItem },

    setup() {
        const newTodo = ref('');  // ref로 변경하여 입력값과 연결
        const todos = ref(['공부하기', '게임하기']);

        const addTodo = () => {
            if (newTodo.value.trim() !== '') {  // 빈 값이 아닌 경우만 추가
                todos.value.push(newTodo.value);
                newTodo.value = '';  // 추가 후 입력 필드를 초기화
            }
        };

        const removeTodo = (index) => {
            todos.value.splice(index, 1);
        };

        return {
            newTodo,
            todos,
            addTodo,
            removeTodo,
        };
    },
};
</script>

<style scoped>
.todo-list {
    max-width: 400px;
    margin: 0 auto;
}
.input-group {
    display: flex;
    margin-top: 10px;
}
.input-group input {
    flex: 1;
    padding: 5px;
}
.input-group button {
    margin-left: 5px;
}
</style>