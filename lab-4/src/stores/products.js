import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
    const products = ref([
        { id: 1, title: 'iPhone 15', price: 1000 },
        { id: 2, title: 'MacBook Air', price: 1500 },
        { id: 3, title: 'AirPods Pro', price: 250 },
        { id: 4, title: 'Apple Watch', price: 400 }
    ])

    return { products }
})