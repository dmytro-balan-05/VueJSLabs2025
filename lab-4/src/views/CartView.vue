<script setup>
import { useCartStore } from '../stores/cart'
const cartStore = useCartStore()
</script>

<template>
  <div>
    <h2>{{ $t('cart.title') }}</h2>
    <div v-if="cartStore.items.length === 0" class="card">
      {{ $t('cart.empty') }}
    </div>
    <div v-else>
      <div v-for="item in cartStore.items" :key="item.id" class="card">
        <h3>{{ item.title }} (x{{ item.qty }})</h3>
        <p>Subtotal: ${{ item.price * item.qty }}</p>
        <button @click="cartStore.removeItem(item.id)" class="btn btn-danger">
          {{ $t('cart.remove') }}
        </button>
      </div>
      <div class="card">
        <h3>{{ $t('cart.total') }}: ${{ cartStore.totalPrice }}</h3>
        <button @click="cartStore.clearCart" class="btn btn-danger">
          {{ $t('cart.clear') }}
        </button>
      </div>
    </div>
  </div>
</template>