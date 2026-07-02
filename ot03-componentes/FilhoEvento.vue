<template>
  <div class="filho-box">
    <h4>Componente Filho</h4>
    <button @click="enviarMensagem">Enviar Mensagem para o Pai</button>
  </div>
</template>

<script>
export default {
  name: 'FilhoEvento',
  methods: {
    enviarMensagem() {
      this.$emit('enviarMensagem', 'Olá, do componente filho!');
    }
  }
};
</script>

<style scoped>
.filho-box {
  padding: 8px;
  border: 1px dashed #999;
  margin-top: 8px;
}
</style>
