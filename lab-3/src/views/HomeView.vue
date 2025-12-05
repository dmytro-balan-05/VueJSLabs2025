<script setup>
import { newsList } from '../data/news'
import NewsCard from '../components/NewsCard.vue'
import './styles/HomeView.css'
</script>

<template>
  <div class="home">
    <h1>Останні новини</h1>
    <div class="grid">
      <NewsCard v-for="item in newsList" :key="item.id" :news="item" />
    </div>
    <div class="ad-slot">
      <p>Реклама: Купуйте гараж!</p>
    </div>
  </div>
</template>