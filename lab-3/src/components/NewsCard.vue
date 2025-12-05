<script setup>
import classes from './NewsCard.module.css'
defineProps(['news'])
</script>

<template>
  <div :class="classes.card">
    <img :src="news.image" :alt="news.title" :class="classes.image" />
    <div :class="classes.content">
      <h3>{{ news.title }}</h3>
      <p class="date">{{ news.date }}</p>
      <p>{{ news.desc }}</p>
      <router-link :to="'/article/' + news.id" :class="classes.btn">
        Читати далі
      </router-link>
    </div>
  </div>
</template>