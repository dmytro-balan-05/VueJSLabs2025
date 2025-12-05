<script setup lang="ts">
useSeoMeta({
  title: 'Головна - Nuxt Blog',
  description: 'Лабораторна робота №6: Nuxt 4 та Nitro',
})
</script>

<template>
  <div class="hero">
    <h1>Вітаємо на Nuxt Course Blog</h1>
    <p>
      Це демонстраційний проект на Nuxt 4 з використанням Server Routes.
    </p>
    <div style="display: flex; justify-content: center; gap: 10px;">
      <UButton to="/blog" size="xl">Читати блог</UButton>
      <UButton to="https://nuxt.com" target="_blank" variant="outline" size="xl">
        Документація
      </UButton>
    </div>
  </div>
</template>