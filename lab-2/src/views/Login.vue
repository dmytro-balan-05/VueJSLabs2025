<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseInput from '../components/BaseInput.vue'
import AuthLayout from '../components/AuthLayout.vue'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = () => {
  if (email.value && password.value) {
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('userEmail', email.value)
    router.push('/admin/dashboard')
  } else {
    alert('Заповніть всі поля')
  }
}
</script>

<template>
  <AuthLayout>
    <template #title><h2>Вхід</h2></template>

    <form @submit.prevent="handleLogin">
      <BaseInput v-model="email" label="Email" type="email" />
      <BaseInput v-model="password" label="Пароль" type="password" />
      <button type="submit">Увійти</button>
      <p><router-link to="/register">Реєстрація</router-link></p>
    </form>
  </AuthLayout>
</template>