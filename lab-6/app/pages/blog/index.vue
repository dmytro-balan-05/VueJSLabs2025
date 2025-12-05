<script setup lang="ts">
useSeoMeta({
  title: 'Блог - Всі статті',
  description: 'Список корисних статей про Nuxt.',
})

const { data: posts, status } = await useFetch('/api/posts')
</script>

<template>
  <div>
    <h1 style="margin-bottom: 20px;">Блог</h1>

    <div v-if="status === 'pending'" class="loading">
      Завантаження...
    </div>

    <div v-else class="blog-grid">
      <UCard v-for="post in posts" :key="post.id">
        <template #header>
          <h3>{{ post.title }}</h3>
        </template>
        <p style="margin-bottom: 15px; color: #666;">{{ post.desc }}</p>
        <template #footer>
          <UButton :to="`/blog/${post.slug}`" block>Читати далі</UButton>
        </template>
      </UCard>
    </div>
  </div>
</template>