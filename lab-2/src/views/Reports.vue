<script setup>
import ReportList from '../components/ReportList.vue'
const reports = [
  { id: 101, title: 'Звіт за Травень', status: 'Готово' },
  { id: 102, title: 'Звіт за Червень', status: 'В процесі' }
]
</script>

<template>
  <div class="card">
    <h2>Звіти</h2>
    <ReportList :items="reports">
      <template #row="{ item }">
        <td><strong>#{{ item.id }}</strong></td>
        <td>{{ item.title }}</td>
        <td><span :style="{color: item.status === 'Готово' ? 'green' : 'orange'}">{{ item.status }}</span></td>
      </template>
    </ReportList>
  </div>
</template>
