<template>
  <div class="mensagem-box">
    <h3>{{ mensagem }}</h3>
  </div>
</template>

<script>
export default {
  name: 'MensagemComponente',
  data() {
    return {
      mensagem: 'Este é um componente Vue básico!'
    };
  }
};
</script>

<style scoped>
.mensagem-box {
  padding: 12px;
  background-color: #e8f0fe;
  border-left: 4px solid #003c8f;
  border-radius: 4px;
}
</style>
