import { defineStore } from 'pinia';
import axios from 'axios';

export const useProdutoStore = defineStore('produto', {
  state: () => ({
    produtos: [],
    carregando: false,
    erro: null,
  }),
  actions: {
    async carregarProdutos() {
      this.carregando = true;
      this.erro = null;
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        this.produtos = response.data;
      } catch (error) {
        this.erro = 'Não foi possível carregar os produtos.';
      } finally {
        this.carregando = false;
      }
    },
  },
});
