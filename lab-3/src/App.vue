<script setup>
import { ref, onMounted } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import './assets/main.css'

const isDark = ref(false)
const themeColor = ref('#ffffff')

onMounted(() => {
  const saved = localStorage.getItem('theme')
  isDark.value = saved === 'dark'
  applyTheme()
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme()
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const applyTheme = () => {
  if (isDark.value) {
    document.body.classList.add('dark-mode')
    themeColor.value = '#222222'
  } else {
    document.body.classList.remove('dark-mode')
    themeColor.value = '#ffffff'
  }
}
</script>

<template>
  <header class="header">
    <div class="logo">VueLab3</div>
    <nav>
      <RouterLink to="/">Головна</RouterLink>
      <RouterLink to="/about">Про нас</RouterLink>
    </nav>
    <button @click="toggleTheme" class="theme-btn">
      {{ isDark ? '☀️' : '🌙' }}
    </button>
  </header>

  <main class="main-content">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>

  <footer class="footer">© 2025 Vue Labs Inc.</footer>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: v-bind(themeColor);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background 0.3s;
}

.logo {
  font-weight: bold;
  font-size: 1.2rem;
}

nav a {
  margin-right: 15px;
}

nav a.router-link-active {
  color: var(--link-color);
  font-weight: bold;
}

.main-content {
  min-height: 80vh;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer {
  text-align: center;
  padding: 20px;
  border-top: 1px solid #ccc;
}

.theme-btn {
  background: none;
  border: 1px solid currentColor;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  color: inherit;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>