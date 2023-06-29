<script>
// 각 할 일에 고유한 ID 부여
let id = 0;

export default {
  data() {
    return {
      newTodo: "",
      hideCompleted: false,
      todos: [
        { id: id++, text: "React 분석하기" },
        { id: id++, text: "Vue 배우기" },
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() != "") {
        this.todos.push({ id: id++, text: this.newTodo });
      } else alert("내용을 입력해주세요.");
      this.newTodo = "";
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo);
    },
  },
};
</script>
<template>
  <div class="todo">
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" />
      <button>Add Todo</button>
    </form>
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ol>
    <button @click="hideCompleted = !hideCompleted"></button>
  </div>
</template>

<style lang="scss">
.todo {
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    justify-content: center;
    gap: 5px;
  }
  button {
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    padding: 8px 16px;
    cursor: pointer;
  }
  button:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    background-color: #f8f9fa;
    border: 1px solid #dadce0;
    color: #202124;
  }
  input {
    outline: none;
    border: 1px solid #dfe1e5;
    border-radius: 24px;
    min-height: 24px;
    padding: 5px 8px 0 14px;
  }
  input:hover {
    background-color: #fff;
    box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
    border-color: rgba(223, 225, 229, 0);
  }
}
</style>
