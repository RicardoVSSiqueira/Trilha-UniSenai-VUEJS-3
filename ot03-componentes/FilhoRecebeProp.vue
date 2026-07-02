<template>
  <div class="filho-box">
    <h4>Componente Filho</h4>
    <p>Dado recebido: {{ dado || '(aguardando clique no pai...)' }}</p>
  </div>
</template>

<script>
export default {
  name: 'FilhoRecebeProp',
  props: ['dado']
};
</script>

<style scoped>
.filho-box {
  padding: 8px;
  border: 1px dashed #999;
  margin-top: 8px;
}
</style>
