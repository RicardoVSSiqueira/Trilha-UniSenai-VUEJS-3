<template>
  <div>
    <h3>Data Table - Produtos (dados estáticos)</h3>
    <v-data-table :items="produtos" :headers="cabecalhos" class="elevation-1"></v-data-table>
  </div>
</template>

<script>
export default {
  name: 'ProdutosTable',
  data() {
    return {
      cabecalhos: [
        { title: 'Nome', key: 'nome' },
        { title: 'Preço', key: 'preco' },
        { title: 'Estoque', key: 'estoque' }
      ],
      produtos: [
        { nome: 'Teclado', preco: 89.9, estoque: 15 },
        { nome: 'Mouse', preco: 39.9, estoque: 30 },
        { nome: 'Monitor', preco: 699.0, estoque: 8 }
      ]
    };
  }
};
</script>