<template>
  <div class="lista-box">
    <h4>Lista de Itens (v-for + :key)</h4>
    <ul>
      <li v-for="item in itens" :key="item.id">
        {{ item.nome }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListaItens',
  data() {
    return {
      itens: [
        { id: 1, nome: 'Item A' },
        { id: 2, nome: 'Item B' },
        { id: 3, nome: 'Item C' }
      ]
    };
  }
};
</script>
