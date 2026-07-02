<template>
  <div class="mixin-box">
    <h4>Componente A (usando o mixin)</h4>
    <p>{{ mensagemMixin }}</p>
    <button @click="mostrarMensagem">Mostrar Mensagem</button>
  </div>
</template>

<script>
import meuMixin from '../mixins/meuMixin';

export default {
  name: 'ComponenteA',
  mixins: [meuMixin]
};
</script>
