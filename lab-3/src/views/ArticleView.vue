<script setup>
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { newsList } from '../data/news'
import ModalWindow from '../components/ModalWindow.vue'
import './styles/ArticleView.css'

const route = useRoute()
const article = computed(() => newsList.find((n) => n.id == route.params.id))
const isModalOpen = ref(false)
</script>

<template>
  <div v-if="article" class="article-page">
    <img :src="article.image" class="banner" />
    <h1>{{ article.title }}</h1>
    <span class="date">{{ article.date }}</span>
    <p class="text">{{ article.content }}</p>

    <div class="ad-banner" @click="isModalOpen = true">
      Спеціальна пропозиція! Натисни мене!
    </div>

    <router-link to="/" class="back-link">← Назад</router-link>

    <ModalWindow :isOpen="isModalOpen" @close="isModalOpen = false">
      <h2>Вітаємо!</h2>
      <img
          src="https://placehold.co/400x200/gold/white?text=WINNER"
          style="width: 100%"
      />
      <p>Ви виграли знижку 99% на ніщо!</p>
    </ModalWindow>
  </div>
  <div v-else>Новину не знайдено</div>
</template>