<script setup>
import { ref, inject } from 'vue'
import OverviewTab from './tabs/OverviewTab.vue'
import ActivityTab from './tabs/ActivityTab.vue'

const user = inject('user')
const currentTab = ref('Overview')
const tabs = { Overview: OverviewTab, Activity: ActivityTab }
</script>

<template>
  <div class="card">
    <h2>Вітаємо, {{ user.email }}</h2>
    <div class="nav-tabs">
      <button
          v-for="(_, name) in tabs"
          :key="name"
          :class="{ active: currentTab === name }"
          @click="currentTab = name"
      >
        {{ name }}
      </button>
    </div>

    <div style="margin-top: 20px; border: 1px solid #ddd; padding: 10px;">
      <KeepAlive>
        <component :is="tabs[currentTab]" />
      </KeepAlive>
    </div>
  </div>
</template>