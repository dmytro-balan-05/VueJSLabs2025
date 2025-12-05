<script setup>
import { provide, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userEmail = localStorage.getItem('userEmail') || 'Admin'

provide('user', { email: userEmail })

const logout = () => {
  localStorage.removeItem('isAuthenticated')
  localStorage.removeItem('userEmail')
  router.push('/login')
}
</script>

<template>
  <div>
    <aside class="sidebar">
      <h3>Admin Panel</h3>
      <nav>
        <router-link to="/admin/dashboard">Дашборд</router-link>
        <router-link to="/admin/users">Користувачі</router-link>
        <router-link to="/admin/reports">Звіти</router-link>
      </nav>
      <button @click="logout" style="margin-top: 20px; width: 100%">Вихід</button>
    </aside>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>