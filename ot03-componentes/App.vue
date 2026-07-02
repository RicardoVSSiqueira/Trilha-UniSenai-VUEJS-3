<template>
  <div id="app">
    <Header />
    <main class="conteudo">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: { Header, Footer }
};
</script>

<style>
body { font-family: Arial, sans-serif; margin: 0; }
.conteudo { max-width: 700px; margin: 20px auto; padding: 0 16px; }
</style>
