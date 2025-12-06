<script setup>
import { ref, computed } from 'vue'
import { filterTodos } from './utils/filters'
import TodoForm from './components/TodoForm.vue'
import TodoItem from './components/TodoItem.vue'

const todos = ref([])
const filter = ref('all')

const addTodo = (title) => {
  todos.value.push({ id: Date.now(), title, completed: false })
}

const toggleTodo = (id) => {
  const t = todos.value.find(x => x.id === id)
  if (t) t.completed = !t.completed
}

const removeTodo = (id) => {
  todos.value = todos.value.filter(x => x.id !== id)
}

const filteredTodos = computed(() => filterTodos(todos.value, filter.value))
</script>

<template>
  <div class="container">
    <h1>Лабораторна робота №7</h1>

    <TodoForm @add="addTodo" />

    <div class="filters">
      <button @click="filter = 'all'">Всі</button>
      <button @click="filter = 'active'">Активні</button>
      <button @click="filter = 'done'">Виконані</button>
    </div>

    <div class="list">
      <TodoItem
          v-for="todo in filteredTodos"
          :key="todo.id"
          :todo="todo"
          @toggle="toggleTodo"
          @remove="removeTodo"
      />
    </div>
  </div>
</template>

<style>
.container { max-width: 500px; margin: 0 auto; font-family: sans-serif; padding: 20px; }
.filters { margin-bottom: 10px; }
.filters button { margin-right: 5px; }
</style>