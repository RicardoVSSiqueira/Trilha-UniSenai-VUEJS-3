export default {
  data() {
    return {
      mensagemMixin: 'Olá, de um mixin!'
    };
  },
  methods: {
    mostrarMensagem() {
      console.log(this.mensagemMixin);
      alert(this.mensagemMixin);
    }
  }
};
