<template>
  <div class="lista-produtos">
    <h2>Produtos</h2>

    <p v-if="produtoStore.carregando">Carregando produtos...</p>
    <p v-else-if="produtoStore.erro" class="erro">{{ produtoStore.erro }}</p>

    <ul v-else>
      <li v-for="produto in produtoStore.produtos" :key="produto.id">
        <span>{{ produto.title }} — R$ {{ produto.price }}</span>
        <button @click="carrinhoStore.adicionarProduto(produto)">
          Adicionar ao carrinho
        </button>
      </li>
    </ul>

    <hr />

    <h3>Carrinho ({{ carrinhoStore.quantidadeItens }} itens)</h3>
    <ul>
      <li v-for="item in carrinhoStore.itens" :key="item.id">
        {{ item.title }} x{{ item.quantidade }}
        <button @click="carrinhoStore.removerProduto(item.id)">Remover</button>
      </li>
    </ul>
    <p><strong>Total: R$ {{ carrinhoStore.valorTotal.toFixed(2) }}</strong></p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProdutoStore } from '@/stores/produtoStore';
import { useCarrinhoStore } from '@/stores/carrinhoStore';

const produtoStore = useProdutoStore();
const carrinhoStore = useCarrinhoStore();

onMounted(() => {
  produtoStore.carregarProdutos();
});
</script>

<style scoped>
.erro {
  color: red;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
</style>
