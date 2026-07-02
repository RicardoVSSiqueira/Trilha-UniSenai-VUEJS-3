<template>
  <div class="formulario-box">
    <header class="form-cabecalho">
      <slot name="cabecalho"></slot>
    </header>
    <div class="form-campos">
      <slot name="campos"></slot>
    </div>
    <div class="form-botao">
      <slot name="botao"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormularioComSlots'
};
</script>

<style scoped>
.formulario-box { border: 1px solid #ccc; border-radius: 4px; margin-top: 12px; }
.form-cabecalho { background: #003c8f; color: white; padding: 8px 12px; }
.form-campos { padding: 12px; }
.form-campos input { display: block; width: 100%; margin-bottom: 8px; padding: 6px; box-sizing: border-box; }
.form-botao { padding: 0 12px 12px; }
</style>
