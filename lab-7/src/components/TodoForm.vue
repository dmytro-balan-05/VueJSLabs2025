<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add'])
const title = ref('')

const onSubmit = () => {
  if (!title.value.trim()) return
  emit('add', title.value)
  title.value = ''
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="todo-form">
    <input
        v-model="title"
        placeholder="Нове завдання..."
        data-testid="todo-input"
    />
    <button type="submit" data-testid="add-btn">Додати</button>
  </form>
</template>

<style scoped>
.todo-form { display: flex; gap: 10px; margin-bottom: 20px; }
input { flex: 1; padding: 5px; }
</style>