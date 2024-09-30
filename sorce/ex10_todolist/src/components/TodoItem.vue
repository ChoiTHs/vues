<template>
    <div class="todo-item">
        <span>{{ todo }}</span>
        <button @click="removeTodo">Remove</button>
    </div>
</template>

<script>
export default {
  props: {
        todo: {
            type: String,
            required: true
        }
    },
    methods: {
        removeTodo() {
            this.$emit('remove'); // 'remove' 이벤트 발생
        }
    },
}
</script>

<style scoped>
.todo-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  .todo-item .completed {
    text-decoration: line-through;
    color: grey;
  }
  .todo-item button {
    background-color: red;
    color: white;
    border: none;
    padding: 2px 5px;
    cursor: pointer;
  }
</style>