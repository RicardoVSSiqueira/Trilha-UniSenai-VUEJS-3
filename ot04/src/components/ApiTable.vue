<template>
  <div>
    <h3>Data Table - Usuários (via API)</h3>
    <v-data-table :items="usuarios" :headers="cabecalhos" class="elevation-1"></v-data-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ApiTable',
  data() {
    return {
      cabecalhos: [
        { title: 'Nome', key: 'nome' },
        { title: 'Email', key: 'email' }
      ],
      usuarios: []
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(resposta => {
      this.usuarios = resposta.data.map(usuario => ({
        nome: usuario.name,
        email: usuario.email
      }));
    });
  }
};
</script>