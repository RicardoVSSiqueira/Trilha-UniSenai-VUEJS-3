<template>
  <div class="card p-4  shadow-sm">
    <h5 class="text-center h3">Clima atual</h5>

    <div v-if="erro" class="alert alert-danger">
      {{ erro }}
    </div>

    <div v-else-if="clima" class="texto">
      <p><strong>Cidade:</strong> {{ clima.name }}</p>
      <p><strong>Temperatura:</strong> {{ clima.main.temp }}°C - {{ clima.weather[0].description }}</p>
    </div>

    <p v-else>Carregando clima...</p>
  </div>
</template>

<script>
import { buscarClima } from '../service/weather';

export default {
  data() {
    return {
      clima: null,
      erro: ''
    };
  },

  async mounted() {
    try {
      const resposta = await buscarClima('Joinville');
      this.clima = resposta.data;
    } catch (error) {
      this.erro = 'Não foi possível carregar a previsão do tempo.';
    }
  }
};
</script>


<style scoped>
.cards {
  background-color: #ffffff;

}

.texto {
  color: #333333;
}

h5 {
  color: #000000;

}
</style>