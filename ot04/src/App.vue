<template>
  <v-app>
    <!-- Exercício 5: toolbar fixo + menu lateral -->
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item title="Home"></v-list-item>
        <v-list-item title="Produtos"></v-list-item>
        <v-list-item title="Sobre"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="text-center">Trilha 04 - Vuetify</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <Home />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/HomePage.vue';

export default {
  name: 'App',
  components: { Home },
  data() {
    return {
      drawer: false
    };
  }
};
</script>