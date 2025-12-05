<script setup>
const model = defineModel()
defineProps(['label', 'type'])
</script>

<template>
  <div class="input-wrapper">
    <label v-if="label">{{ label }}</label>
    <input
        :type="type || 'text'"
        v-model="model"
        v-bind="$attrs"
    />
  </div>
</template>