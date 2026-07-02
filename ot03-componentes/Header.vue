<template>
  <header class="app-header">
    <h1>Trilha 03 - Componentes Vue</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
.app-header {
  background: #003c8f;
  color: white;
  padding: 12px 20px;
}
.app-header nav a {
  color: #ffd54f;
  margin-right: 8px;
}
</style>
