<script setup lang="ts">
useSeoMeta({
  title: 'Про нас - Nuxt Blog',
  description: 'Інформація про проект та автора.',
})
</script>

<template>
  <UCard>
    <template #header>
      <h2>Про проект</h2>
    </template>
    <p style="margin-bottom: 15px;">
      Цей сайт розроблено в рамках лабораторної роботи №6.
    </p>
    <ul style="margin-bottom: 15px; padding-left: 20px;">
      <li>Nuxt 4 Structure (app/ dir)</li>
      <li>Nitro API Routes</li>
      <li>Nuxt UI Components</li>
      <li>SEO (Sitemap, Robots)</li>
    </ul>
    <UAlert
        icon="i-heroicons-information-circle"
        color="primary"
        variant="subtle"
        title="Автор"
        description="Студент 4-го курсу Балан Дмитро ВТ-22-1"
    />
  </UCard>
</template>