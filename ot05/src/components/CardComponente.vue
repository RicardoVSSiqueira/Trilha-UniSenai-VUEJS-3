<template>
  <div class="card" style="width: 18rem;">
    <img src="https://picsum.photos/300/160" class="card-img-top" alt="Imagem">
    <div class="card-body">
      <h5 class="card-title">Título do Card</h5>
      <p class="card-text">Descrição do card.</p>
      <button class="btn btn-primary" @click="mostrarAlerta">Saiba Mais</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponente',
  methods: {
    mostrarAlerta() {
      alert('Você clicou em Saiba Mais!');
    }
  }
};
</script>