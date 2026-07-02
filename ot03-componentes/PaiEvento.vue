<template>
  <div class="pai-box">
    <h4>Componente Pai</h4>
    <FilhoEvento @enviarMensagem="receberMensagem" />
    <p>Mensagem do Filho: {{ mensagemFilho }}</p>
  </div>
</template>

<script>
import FilhoEvento from './FilhoEvento.vue';

export default {
  name: 'PaiEvento',
  components: { FilhoEvento },
  data() {
    return {
      mensagemFilho: ''
    };
  },
  methods: {
    receberMensagem(mensagem) {
      this.mensagemFilho = mensagem;
    }
  }
};
</script>
