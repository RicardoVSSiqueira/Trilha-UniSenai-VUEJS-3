<template>
  <div>
    <!-- Exercício 1: Grid responsivo com 3 colunas -->
    <h3>Exercício 1 — Grid Responsivo</h3>
    <v-row>
      <v-col cols="12" md="6" lg="4">
        <v-card>Coluna 1</v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card>Coluna 2</v-card>
      </v-col>
      <v-col cols="12" md="12" lg="4">
        <v-card>Coluna 3</v-card>
      </v-col>
    </v-row>

    <!-- Exercício 2: botão estilizado -->
    <h3 class="mt-6">Exercício 2 — Botão</h3>
    <v-btn color="secondary" @click="logBotao">Clique Aqui</v-btn>

    <!-- Exercício 3: card com imagem, título e botão -->
    <h3 class="mt-6">Exercício 3 — Card</h3>
    <v-card max-width="300">
      <v-img src="https://picsum.photos/300/160" height="160" cover></v-img>
      <v-card-title>Produto Exemplo</v-card-title>
      <v-card-actions>
        <v-btn color="primary" @click="alertarCard">Ver detalhes</v-btn>
      </v-card-actions>
    </v-card>

    <!-- Exercício 4: modal -->
    <h3 class="mt-6">Exercício 4 — Modal</h3>
    <v-dialog v-model="modalAberto" max-width="500">
      <template #activator="{ props }">
        <v-btn color="primary" v-bind="props">Abrir Modal</v-btn>
      </template>
      <v-card>
        <v-card-title>Título do Modal</v-card-title>
        <v-card-text>Este é o conteúdo do modal.</v-card-text>
        <v-card-actions>
          <v-btn color="secondary" @click="modalAberto = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Exercício 6 -->
    <h3 class="mt-6">Exercício 6 — Data Table Estática</h3>
    <ProdutosTable />

    <!-- Exercício 7 -->
    <h3 class="mt-6">Exercício 7 — Formulário de Login</h3>
    <LoginForm />

    <!-- Exercício 9: botões arredondados com sombra (classe custom-btn, ver <style> abaixo) -->
    <h3 class="mt-6">Exercício 9 — Botão com SCSS customizado</h3>
    <v-btn class="custom-btn" color="primary">Botão Customizado</v-btn>

    <!-- Exercício 10 -->
    <h3 class="mt-6">Exercício 10 — Data Table via API</h3>
    <ApiTable />
  </div>
</template>

<script>
import ProdutosTable from '../components/ProdutosTable.vue';
import LoginForm from '../components/LoginForm.vue';
import ApiTable from '../components/ApiTable.vue';

export default {
  name: 'HomePage',
  components: { ProdutosTable, LoginForm, ApiTable },
  data() {
    return {
      modalAberto: false
    };
  },
  methods: {
    logBotao() {
      console.log('Botão clicado!');
    },
    alertarCard() {
      alert('Você clicou em Ver detalhes!');
    }
  }
};
</script>

<style lang="scss" scoped>
// Exercício 9: botões arredondados e com sombra suave
.custom-btn {
  border-radius: 20px !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
}
</style>