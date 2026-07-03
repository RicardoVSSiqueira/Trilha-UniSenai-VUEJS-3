<template>
  <div class="container my-4">
    <h3>Exercícios 1 e 5 — Grid System Responsivo</h3>
    <GridExemplo />

    <h3 class="mt-5">Exercício 3 — Botão Dinâmico</h3>
    <BotaoDinamico />

    <h3 class="mt-5">Exercício 4 — Card</h3>
    <CardComponente />

    <h3 class="mt-5">Exercício 6 — Modal</h3>
    <ModalComponente />

    <h3 class="mt-5">Exercício 7 — Formulário com Validação</h3>
    <FormularioComponente />

    <h3 class="mt-5">Exercício 10 — Tabs Dinâmicas</h3>
    <TabsComponente />
  </div>
</template>

<script>
import GridExemplo from '../components/GridExemplo.vue';
import BotaoDinamico from '../components/BotaoDinamico.vue';
import CardComponente from '../components/CardComponente.vue';
import ModalComponente from '../components/ModalComponente.vue';
import FormularioComponente from '../components/FormularioComponente.vue';
import TabsComponente from '../components/TabsComponente.vue';

export default {
  name: 'Home',
  components: {
    GridExemplo,
    BotaoDinamico,
    CardComponente,
    ModalComponente,
    FormularioComponente,
    TabsComponente
  }
};
</script>