<template>
  <div class="layout-container">
    <header class="header">
      <div class="logo">NuxtBlog</div>
      <nav class="nav">
        <UButton to="/" variant="ghost">Головна</UButton>
        <UButton to="/blog" variant="ghost">Блог</UButton>
        <UButton to="/about" variant="ghost">Про нас</UButton>
      </nav>
    </header>

    <main class="main-content">
      <slot />
    </main>

    <footer class="footer">
      &copy; 2025 NuxtJS Labs
    </footer>
  </div>
</template>