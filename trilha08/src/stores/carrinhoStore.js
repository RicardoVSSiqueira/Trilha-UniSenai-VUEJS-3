import { defineStore } from 'pinia';

export const useCarrinhoStore = defineStore('carrinho', {
  state: () => ({
    itens: [],
  }),
  getters: {
    valorTotal: (state) =>
      state.itens.reduce((total, item) => total + item.price * (item.quantidade || 1), 0),
    quantidadeItens: (state) => state.itens.length,
  },
  actions: {
    adicionarProduto(produto) {
      const existente = this.itens.find((item) => item.id === produto.id);
      if (existente) {
        existente.quantidade += 1;
      } else {
        this.itens.push({ ...produto, quantidade: 1 });
      }
    },
    removerProduto(produtoId) {
      this.itens = this.itens.filter((item) => item.id !== produtoId);
    },
    limparCarrinho() {
      this.itens = [];
    },
  },
});
