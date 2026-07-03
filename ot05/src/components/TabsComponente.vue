<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="aba in abas" :key="aba.id">
        <a
          class="nav-link"
          :class="{ active: abaAtiva === aba.id }"
          href="#"
          @click.prevent="abaAtiva = aba.id"
        >
          {{ aba.titulo }}
        </a>
      </li>
    </ul>

    <div class="border border-top-0 p-3">
      <p v-for="aba in abas" :key="aba.id" v-show="abaAtiva === aba.id">
        {{ aba.conteudo }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabsComponente',
  data() {
    return {
      abaAtiva: 1,
      abas: [
        { id: 1, titulo: 'Aba 1', conteudo: 'Conteúdo da primeira aba.' },
        { id: 2, titulo: 'Aba 2', conteudo: 'Conteúdo da segunda aba.' },
        { id: 3, titulo: 'Aba 3', conteudo: 'Conteúdo da terceira aba.' }
      ]
    };
  }
};
</script>