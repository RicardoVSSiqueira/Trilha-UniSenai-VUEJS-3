<template>
  <div class="mixin-box">
    <h4>Componente B (usando o mesmo mixin)</h4>
    <p>{{ mensagemMixin }}</p>
    <button @click="mostrarMensagem">Mostrar Mensagem</button>
  </div>
</template>

<script>
import meuMixin from '../mixins/meuMixin';

export default {
  name: 'ComponenteB',
  mixins: [meuMixin],
  // Demonstra que o componente pode sobrescrever o dado vindo do mixin
  data() {
    return {
      mensagemMixin: 'Olá, do Componente B (sobrescrevendo o mixin)!'
    };
  }
};
</script>
