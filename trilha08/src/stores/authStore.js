import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    usuario: null,
  }),
  getters: {
    estaLogado: (state) => !!state.token,
  },
  actions: {
    login(token, usuario) {
      this.token = token;
      this.usuario = usuario;
      localStorage.setItem('token', token);
    },
    logout() {
      this.token = null;
      this.usuario = null;
      localStorage.removeItem('token');
    },
    carregarSessao() {
      const tokenSalvo = localStorage.getItem('token');
      if (tokenSalvo) {
        this.token = tokenSalvo;
      }
    },
  },
});
