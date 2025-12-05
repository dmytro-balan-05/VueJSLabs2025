import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
    const items = ref([])

    const totalCount = computed(() => items.value.reduce((acc, item) => acc + item.qty, 0))
    const totalPrice = computed(() => items.value.reduce((acc, item) => acc + item.price * item.qty, 0))

    const addItem = (product) => {
        const existing = items.value.find(i => i.id === product.id)
        if (existing) {
            existing.qty++
        } else {
            items.value.push({ ...product, qty: 1 })
        }
    }

    const removeItem = (id) => {
        items.value = items.value.filter(i => i.id !== id)
    }

    const clearCart = () => {
        items.value = []
    }

    return { items, totalCount, totalPrice, addItem, removeItem, clearCart }
})