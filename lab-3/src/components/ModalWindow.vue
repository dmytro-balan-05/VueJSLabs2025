<script setup>
import './ModalWindow.css'
defineProps(['isOpen'])
defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-overlay" @click="$emit('close')">
        <div class="modal-content" @click.stop>
          <button class="close-btn" @click="$emit('close')">×</button>
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>