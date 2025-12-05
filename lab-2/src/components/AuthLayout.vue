<template>
  <div class="auth-container">
    <div class="auth-card">
      <slot name="title"></slot>
      <hr />
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.auth-card {
  background: white;
  padding: 30px;
  width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
</style>