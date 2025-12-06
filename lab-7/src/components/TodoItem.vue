<script setup>
defineProps(['todo'])
defineEmits(['toggle', 'remove'])
</script>

<template>
  <div class="todo-item" :class="{ completed: todo.completed }">
    <span @click="$emit('toggle', todo.id)" class="text">
      {{ todo.title }}
    </span>
    <button @click="$emit('remove', todo.id)" class="btn-delete">x</button>
  </div>
</template>

<style scoped>
.todo-item { display: flex; justify-content: space-between; padding: 10px; border-bottom: 1px solid #eee; }
.completed .text { text-decoration: line-through; color: gray; }
.text { cursor: pointer; }
.btn-delete { background: red; color: white; border: none; cursor: pointer; }
</style>