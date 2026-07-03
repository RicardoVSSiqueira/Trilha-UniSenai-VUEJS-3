<template>
  <v-card class="pa-4" max-width="400">
    <v-card-title>Login</v-card-title>
    <v-form ref="form" v-model="formValido">
      <v-text-field
        v-model="email"
        label="Email"
        :rules="[regraObrigatorio, regraEmail]"
      ></v-text-field>
      <v-text-field
        v-model="senha"
        label="Senha"
        type="password"
        :rules="[regraObrigatorio, regraSenhaMinima]"
      ></v-text-field>
      <v-btn color="primary" :disabled="!formValido" @click="entrar">Entrar</v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      senha: '',
      formValido: false,
      regraObrigatorio: value => !!value || 'Este campo é obrigatório',
      regraEmail: value => /.+@.+\..+/.test(value) || 'Digite um email válido',
      regraSenhaMinima: value => (value && value.length >= 6) || 'Mínimo de 6 caracteres'
    };
  },
  methods: {
    entrar() {
      alert(`Login enviado! Email: ${this.email}`);
    }
  }
};
</script>