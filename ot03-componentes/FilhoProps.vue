<template>
  <div class="filho-box">
    <h4>Componente Filho</h4>
    <p>Mensagem recebida do pai: {{ mensagem }}</p>
  </div>
</template>

<script>
export default {
  name: 'FilhoProps',
  props: ['mensagem']
};
</script>

<style scoped>
.filho-box {
  padding: 8px;
  border: 1px dashed #999;
  margin-top: 8px;
}
</style>
