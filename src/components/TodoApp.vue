<template>
  <div>
    <p data-test="yum">Yum Fluff</p>
    <div v-for="todo in todos" :key="todo.id" data-test="todo">
      {{ todo.text }}
    </div>
    <form data-test="form" @submit.prevent="addNewTodo">
      <input type="text" v-model="newTodo" data-test="new-todo" required>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data() {
    return {
      newTodo: '',
      todos: [
        {
          id: 1,
          text: 'Learn Vue Testing',
          completed: false
        },
        {
          id: 2,
          text: 'Really making progress',
          completed: true
        }
      ]
    }
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.todos.length + 1,
        text: this.newTodo,
        completed: false
      })
    }
  },
  updated() {
    console.log(this.todos.length)
  }
}
</script>

<style scoped>
</style>
