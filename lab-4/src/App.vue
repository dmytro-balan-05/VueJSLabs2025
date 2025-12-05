<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useSettingsStore } from './stores/settings'
import { useCartStore } from './stores/cart'
import { onMounted } from 'vue'
import i18n from './i18n'

const settings = useSettingsStore()
const cart = useCartStore()

const toggleLang = () => {
  const newLang = settings.locale === 'ua' ? 'en' : 'ua'
  settings.setLocale(newLang)
}

onMounted(() => {
  i18n.global.locale.value = settings.locale
})
</script>

<template>
  <div class="container">
    <nav>
      <RouterLink to="/">{{ $t('nav.products') }}</RouterLink>
      <RouterLink to="/cart">{{ $t('nav.cart') }} ({{ cart.totalCount }})</RouterLink>
      <RouterLink to="/profile">{{ $t('nav.profile') }}</RouterLink>

      <button @click="toggleLang" class="lang-switch">
        {{ settings.locale.toUpperCase() }}
      </button>
    </nav>
    <RouterView />
  </div>
</template>