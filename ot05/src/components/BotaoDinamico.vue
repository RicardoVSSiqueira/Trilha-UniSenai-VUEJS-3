<template>
  <button :class="['btn', corAtual]" @click="alternarCor">
    Clique para mudar de cor
  </button>
</template>

<script>
export default {
  name: 'BotaoDinamico',
  data() {
    return {
      corAtual: 'btn-primary'
    };
  },
  methods: {
    alternarCor() {
      this.corAtual = this.corAtual === 'btn-primary' ? 'btn-danger' : 'btn-primary';
    }
  }
};
</script>