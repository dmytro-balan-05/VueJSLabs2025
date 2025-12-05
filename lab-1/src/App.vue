<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const tasks = ref([])
const newTask = ref({
  title: '',
  description: '',
  priority: 'medium'
})
const filter = ref({
  status: 'all',
  priority: 'all',
  search: ''
})

const currentPage = ref(1)
const itemsPerPage = 5

onMounted(() => {
  const saved = localStorage.getItem('vue-todo-lab1')
  if (saved) {
    tasks.value = JSON.parse(saved)
  }
})

watch(
    tasks,
    (newVal) => {
      localStorage.setItem('vue-todo-lab1', JSON.stringify(newVal))
    },
    { deep: true }
)

const addTask = () => {
  if (!newTask.value.title.trim()) return alert('Введіть назву завдання!')

  tasks.value.push({
    id: Date.now(),
    title: newTask.value.title,
    description: newTask.value.description,
    status: 'active',
    priority: newTask.value.priority,
    createdAt: new Date().toLocaleString()
  })

  newTask.value = { title: '', description: '', priority: 'medium' }
}

const removeTask = (id) => {
  tasks.value = tasks.value.filter((t) => t.id !== id)
}

const toggleStatus = (task) => {
  task.status = task.status === 'active' ? 'done' : 'active'
}

const totalTasks = computed(() => tasks.value.length)
const activeTasks = computed(
    () => tasks.value.filter((t) => t.status === 'active').length
)
const completedTasks = computed(
    () => tasks.value.filter((t) => t.status === 'done').length
)

const filteredTasks = computed(() => {
  return tasks.value.filter((task) => {
    const matchStatus =
        filter.value.status === 'all' || task.status === filter.value.status
    const matchPriority =
        filter.value.priority === 'all' || task.priority === filter.value.priority
    const matchSearch =
        task.title.toLowerCase().includes(filter.value.search.toLowerCase()) ||
        task.description.toLowerCase().includes(filter.value.search.toLowerCase())
    return matchStatus && matchPriority && matchSearch
  })
})

const paginatedTasks = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredTasks.value.slice(start, end)
})

const totalPages = computed(() =>
    Math.ceil(filteredTasks.value.length / itemsPerPage)
)

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const clearFilters = () => {
  filter.value = { status: 'all', priority: 'all', search: '' }
}
</script>

<template>
  <div class="container">
    <h1>Лабораторна 1: Vue To-Do</h1>

    <div class="stats">
      <span>Всього: {{ totalTasks }}</span>
      <span>Активні: {{ activeTasks }}</span>
      <span>Виконані: {{ completedTasks }}</span>
    </div>

    <div class="card add-form">
      <h3>Нове завдання</h3>
      <input v-model="newTask.title" placeholder="Назва (обов'язково)" />
      <input v-model="newTask.description" placeholder="Опис" />
      <select v-model="newTask.priority">
        <option value="low">Низький</option>
        <option value="medium">Середній</option>
        <option value="high">Високий</option>
      </select>
      <button @click="addTask" class="btn-primary">Додати</button>
    </div>

    <div class="card filters">
      <h3>Фільтри</h3>
      <div class="filter-row">
        <input v-model="filter.search" placeholder="Пошук..." />
        <select v-model="filter.status">
          <option value="all">Всі статуси</option>
          <option value="active">Активні</option>
          <option value="done">Виконані</option>
        </select>
        <select v-model="filter.priority">
          <option value="all">Всі пріоритети</option>
          <option value="low">Низький</option>
          <option value="medium">Середній</option>
          <option value="high">Високий</option>
        </select>
        <button @click="clearFilters">Очистити</button>
      </div>
    </div>

    <div class="task-list">
      <div
          v-for="task in paginatedTasks"
          :key="task.id"
          class="task-item"
          :class="{
          done: task.status === 'done',
          high: task.priority === 'high'
        }"
      >
        <div class="task-info">
          <h4>
            {{ task.title }} <small>({{ task.priority }})</small>
          </h4>
          <p>{{ task.description }}</p>
          <small>{{ task.createdAt }}</small>
        </div>
        <div class="task-actions">
          <button @click="toggleStatus(task)">
            {{ task.status === 'active' ? 'Завершити' : 'Повернути' }}
          </button>
          <button @click="removeTask(task.id)" class="btn-danger">X</button>
        </div>
      </div>
      <div v-if="paginatedTasks.length === 0" class="empty">
        Немає завдань
      </div>
    </div>

    <div class="pagination" v-if="totalPages > 1">
      <button @click="prevPage" :disabled="currentPage === 1">Назад</button>
      <span>Стор. {{ currentPage }} з {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Вперед
      </button>
    </div>
  </div>
</template>