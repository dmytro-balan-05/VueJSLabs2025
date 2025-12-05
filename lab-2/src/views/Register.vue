<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseInput from '../components/BaseInput.vue'
import AuthLayout from '../components/AuthLayout.vue'

const router = useRouter()
const form = ref({ name: '', email: '', password: '', confirm: '' })

const handleRegister = () => {
  if (form.value.password !== form.value.confirm) {
    alert('Паролі не співпадають')
    return
  }
  localStorage.setItem('isAuthenticated', 'true')
  localStorage.setItem('userEmail', form.value.email)
  router.push('/admin/dashboard')
}
</script>

<template>
  <AuthLayout>
    <template #title><h2>Реєстрація</h2></template>

    <form @submit.prevent="handleRegister">
      <BaseInput v-model="form.name" label="Ім'я" />
      <BaseInput v-model="form.email" label="Email" type="email" />
      <BaseInput v-model="form.password" label="Пароль" type="password" />
      <BaseInput v-model="form.confirm" label="Повтор паролю" type="password" />
      <button type="submit">Зареєструватися</button>
    </form>
  </AuthLayout>
</template>