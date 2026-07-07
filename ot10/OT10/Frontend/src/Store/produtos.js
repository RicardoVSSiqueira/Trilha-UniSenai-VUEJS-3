import api from '../service/api';

export default {
  namespaced: true,

  state: {
    produtos: []
  },

  mutations: {
    SET_PRODUTOS(state, produtos) {
      state.produtos = produtos;
    }
  },

  actions: {
    async listar({ commit }) {
      const response = await api.get('/produtos');
      commit('SET_PRODUTOS', response.data);
    },

    async cadastrar(_, produto) {
      await api.post('/produtos', produto);
    },

    async atualizar(_, produto) {
      await api.put(`/produtos/${produto.id}`, produto);
    },

    async deletar(_, id) {
      await api.delete(`/produtos/${id}`);
    }
  }
};