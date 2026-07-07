import api from '../service/api';

export default {
  namespaced: true,

  state: {
    token: localStorage.getItem('token') || null
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    }
  },

  actions: {
    async login({ commit }, dados) {
      const response = await api.post('/auth/login', dados);

      localStorage.setItem('token', response.data.token);
      commit('SET_TOKEN', response.data.token);
    },

    async register(_, dados) {
      await api.post('/auth/register', dados);
    },

    logout({ commit }) {
      localStorage.removeItem('token');
      commit('SET_TOKEN', null);
    }
  }
};