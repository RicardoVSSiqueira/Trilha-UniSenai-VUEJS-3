<template>
  <form class="row g-3" :class="{ 'was-validated': formValidado }" novalidate @submit.prevent="enviar">
    <div class="col-md-12">
      <label class="form-label">Nome</label>
      <input v-model="nome" type="text" class="form-control" required>
      <div class="invalid-feedback">Informe seu nome.</div>
    </div>

    <div class="col-md-12">
      <label class="form-label">E-mail</label>
      <input v-model="email" type="email" class="form-control" required>
      <div class="invalid-feedback">Informe um e-mail válido.</div>
    </div>

    <div class="col-md-12">
      <label class="form-label">Senha</label>
      <input v-model="senha" type="password" class="form-control" required minlength="6">
      <div class="invalid-feedback">A senha deve ter pelo menos 6 caracteres.</div>
    </div>

    <div class="col-12">
      <button class="btn btn-primary" type="submit">Cadastrar</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormularioComponente',
  data() {
    return {
      nome: '',
      email: '',
      senha: '',
      formValidado: false
    };
  },
  methods: {
    enviar(event) {
      const form = event.target;
      this.formValidado = true;
      if (form.checkValidity()) {
        alert(`Cadastro enviado! Nome: ${this.nome}, Email: ${this.email}`);
      }
    }
  }
};
</script>