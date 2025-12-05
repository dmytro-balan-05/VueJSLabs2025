<script setup lang="ts">
const route = useRoute()
const { data: post, error } = await useFetch(`/api/posts/${route.params.slug}`)

if (post.value) {
  useSeoMeta({
    title: post.value.title,
    description: post.value.desc,
    ogTitle: post.value.title,
    ogDescription: post.value.desc,
  })
}
</script>

<template>
  <div class="article-container">
    <UButton to="/blog" variant="ghost" icon="i-heroicons-arrow-left" style="margin-bottom: 20px;">
      Назад до списку
    </UButton>

    <div v-if="error" class="error-message">
      <h2>Помилка 404</h2>
      <p>Статтю не знайдено</p>
    </div>

    <article v-else-if="post">
      <h1 class="article-title">{{ post.title }}</h1>
      <UBadge color="primary" variant="subtle" style="margin-bottom: 20px;">{{ route.params.slug }}</UBadge>
      <div class="article-content">
        {{ post.content }}
      </div>
    </article>
  </div>
</template>