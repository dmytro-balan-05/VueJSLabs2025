<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<template>
  <div class="card">
    <h2>Профіль ID: {{ route.params.id }}</h2>
    <button @click="$router.back()">Назад</button>
  </div>
</template>