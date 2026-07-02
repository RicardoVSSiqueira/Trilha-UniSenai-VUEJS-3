<template>
  <div class="componente-com-slot">
    <!-- Exercício 4: slot simples -->
    <div class="slot-simples">
      <h4>Slot Simples</h4>
      <slot></slot>
    </div>

    <!-- Exercício 5: slots nomeados -->
    <div class="slot-nomeado-box">
      <header class="cabecalho">
        <slot name="cabecalho"></slot>
      </header>
      <main>
        <slot name="corpo"></slot>
      </main>
      <footer class="rodape">
        <slot name="rodape"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponenteComSlot'
};
</script>

<style scoped>
.componente-com-slot { margin-top: 12px; }
.slot-nomeado-box { border: 1px solid #ccc; margin-top: 12px; }
.cabecalho { background: #003c8f; color: white; padding: 8px; }
.rodape { background: #eee; padding: 8px; font-size: 0.85em; }
main { padding: 8px; }
</style>
