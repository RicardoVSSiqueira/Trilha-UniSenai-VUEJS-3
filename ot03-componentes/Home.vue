<template>
  <div class="home">
    <!-- Exercício 1 -->
    <MensagemComponente />

    <!-- Exercícios 2 e 3 -->
    <PaiProps />
    <PaiEvento />

    <!-- Exercícios 4 e 5 -->
    <ComponenteComSlot>
      Este conteúdo foi inserido no slot simples!
      <template #cabecalho>
        <h4>Cabeçalho personalizado</h4>
      </template>
      <template #corpo>
        <p>Conteúdo do corpo, inserido via slot nomeado "corpo".</p>
      </template>
      <template #rodape>
        <p>Rodapé personalizado via slot nomeado "rodape".</p>
      </template>
    </ComponenteComSlot>

    <!-- Exercício 6 -->
    <ComponenteA />
    <ComponenteB />

    <!-- Exercício 8 -->
    <ListaItens />

    <!-- Exercício 9 -->
    <PaiBotaoProps />

    <!-- Exercício 10 -->
    <FormularioComSlots>
      <template #cabecalho>
        <h4>Formulário de Contato</h4>
      </template>
      <template #campos>
        <input type="text" placeholder="Nome">
        <input type="email" placeholder="Email">
      </template>
      <template #botao>
        <button>Enviar</button>
      </template>
    </FormularioComSlots>
  </div>
</template>

<script>
import MensagemComponente from '../components/MensagemComponente.vue';
import PaiProps from '../components/PaiProps.vue';
import PaiEvento from '../components/PaiEvento.vue';
import ComponenteComSlot from '../components/ComponenteComSlot.vue';
import ComponenteA from '../components/ComponenteA.vue';
import ComponenteB from '../components/ComponenteB.vue';
import ListaItens from '../components/ListaItens.vue';
import PaiBotaoProps from '../components/PaiBotaoProps.vue';
import FormularioComSlots from '../components/FormularioComSlots.vue';

export default {
  name: 'Home',
  components: {
    MensagemComponente,
    PaiProps,
    PaiEvento,
    ComponenteComSlot,
    ComponenteA,
    ComponenteB,
    ListaItens,
    PaiBotaoProps,
    FormularioComSlots
  }
};
</script>

<style scoped>
.home > * { margin-bottom: 20px; }
</style>
