<template>
  <div class="pai-box">
    <h4>Componente Pai</h4>
    <button @click="enviarDado">Enviar dado para o filho</button>
    <FilhoRecebeProp :dado="dadoParaFilho" />
  </div>
</template>

<script>
import FilhoRecebeProp from './FilhoRecebeProp.vue';

export default {
  name: 'PaiBotaoProps',
  components: { FilhoRecebeProp },
  data() {
    return {
      dadoParaFilho: ''
    };
  },
  methods: {
    enviarDado() {
      this.dadoParaFilho = `Dado enviado às ${new Date().toLocaleTimeString()}`;
    }
  }
};
</script>
