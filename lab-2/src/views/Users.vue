<template>
  <div class="card">
    <h2>Користувачі</h2>
    <ul>
      <li v-for="i in 5" :key="i">
        <router-link :to="'/admin/user/' + i">Користувач {{ i }}</router-link>
      </li>
    </ul>
  </div>
</template>