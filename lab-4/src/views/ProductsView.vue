<script setup>
import { useProductsStore } from '../stores/products'
import { useCartStore } from '../stores/cart'

const productsStore = useProductsStore()
const cartStore = useCartStore()
</script>

<template>
  <div>
    <h2>{{ $t('products.title') }}</h2>
    <div v-for="product in productsStore.products" :key="product.id" class="card">
      <h3>{{ product.title }}</h3>
      <p>Price: ${{ product.price }}</p>
      <button @click="cartStore.addItem(product)" class="btn">
        {{ $t('products.add') }}
      </button>
    </div>
  </div>
</template>