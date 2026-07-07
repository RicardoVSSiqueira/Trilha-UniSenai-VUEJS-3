<template>
    <v-container class="d-flex align-center justify-center login w-100">
        <v-card width="420" class="pa-6 cards texto">
            <v-card-title class="text-center text-h5 mb-4">
                Login
            </v-card-title>

            <v-alert v-if="erro" type="error" class="mb-4">
                {{ erro }}
            </v-alert>

            <v-form @submit.prevent="login">
                <v-text-field v-model="email" label="E-mail" type="email" variant="outlined" prepend-inner-icon="mdi-email" required />

                <v-text-field v-model="senha" label="Senha" type="password" variant="outlined" prepend-inner-icon="mdi-lock" required />

                <v-btn type="submit"  class="mt-2 button w-100">
                    Entrar
                </v-btn>

                <v-btn variant="text" block class="mt-2 " @click="$router.push('/register')">
                    Criar conta
                </v-btn>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
import api from '../service/api';

export default {
    data() {
        return {
            email: '',
            senha: '',
            erro: ''
        };
    },

    methods: {
        async login() {
            try {
                this.erro = '';

                const resposta = await api.post('/auth/login', {
                    email: this.email,
                    senha: this.senha
                });

                localStorage.setItem('token', resposta.data.token);

                this.$router.push('/dashboard');
            } catch (error) {
                this.erro = 'E-mail ou senha inválidos.';
            }
        }
    }
};
</script>




<style scoped>
.login {
    min-width: 100vw;
    min-height: 100vh;
    background-color: #f2f2f2;
}

  .cards{
    background-color: #ffffff;
    
  }

  .texto{
    color:#333333 ;
  }
  
  .titulo{
    color:#000000 ;
  }

  .button{
    background-color: #000000;
  }

</style>