<template>
  <div class="pai-box">
    <h4>Componente Pai</h4>
    <FilhoProps :mensagem="mensagemDoPai" />
  </div>
</template>

<script>
import FilhoProps from './FilhoProps.vue';

export default {
  name: 'PaiProps',
  components: { FilhoProps },
  data() {
    return {
      mensagemDoPai: 'Olá, do componente pai!'
    };
  }
};
</script>
