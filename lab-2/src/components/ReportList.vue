<script setup>
defineProps(['items'])
</script>

<template>
  <div class="report-list">
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Дані</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" :key="item.id">
        <slot name="row" :item="item">
          <td>{{ item.id }}</td>
          <td>{{ item.text }}</td>
        </slot>
      </tr>
      </tbody>
    </table>
  </div>
</template>