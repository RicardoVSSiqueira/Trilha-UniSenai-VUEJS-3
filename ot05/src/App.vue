<template>
  <div class="d-flex flex-column min-vh-100">
    <NavbarComponente />
    <main class="flex-grow-1">
      <HomePage />
    </main>
    <FooterComponente />
  </div>
</template>

<script>
import NavbarComponente from './components/NavbarComponente.vue';
import FooterComponente from './components/FooterComponente.vue';
import HomePage from './views/HomePage.vue';

export default {
  name: 'App',
  components: { NavbarComponente, FooterComponente, HomePage }
};
</script>