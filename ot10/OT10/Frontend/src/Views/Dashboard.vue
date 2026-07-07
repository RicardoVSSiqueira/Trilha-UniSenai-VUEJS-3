<template>
    <div>
        <Navbar />

        <v-main class="dashboard">
            <v-container class="mt-5">

                <h2 class="mb-5 texto">
                    Dashboard
                </h2>

                <v-row>
                    <v-col cols="12" md="4">
                        <v-card class="pa-5 cards texto text-center">
                            <v-card-title class=" h3  ">Produtos</v-card-title>

                            <v-card-text class="text-center fs-2">
                                {{ produtos.length }}
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="4" >
                        <v-card class="pa-5 cards texto text-center" >
                            <v-card-title class=" h3  ">Categorias</v-card-title>

                            <v-card-text class=" fs-2" >
                                {{ categorias }}
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="4" class="cards">
                        <WeatherCard />
                    </v-col>
                </v-row>

                <v-card class="mt-5 cards texto p-2">
                    <v-card-title class="titulo fs-3">Últimos Produtos</v-card-title>

                    <v-table class="cards texto text-center">
                        <thead>
                            <tr class="fs-5">
                                <th>Nome</th>
                                <th>Categoria</th>
                                <th>Preço</th>
                            </tr>
                        </thead>

                        <tbody >
                            <tr v-for="produto in produtos" :key="produto.id">
                                <td>{{ produto.nome }}</td>
                                <td>{{ produto.categoria }}</td>
                                <td>R$ {{ produto.preco }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>

                <v-btn  class="mt-5 p-4 w-100 button rounded-pill" @click="$router.push('/produtos')">
                    Gerenciar Produtos
                </v-btn>

            </v-container>
        </v-main>
    </div>
</template>

<script>

import Navbar from '../Componentes/Navbar.vue';
import WeatherCard from '../Componentes/Weather.vue';

import api from '../service/api';

export default {

    components: {
        Navbar,
        WeatherCard
    },

    data() {

        return {

            produtos: []

        }

    },

    computed: {

        categorias() {

            return [...new Set(this.produtos.map(p => p.categoria))].length;

        }

    },

    async mounted() {

        const resposta = await api.get('/produtos');

        this.produtos = resposta.data;

    }

}

</script>

<style scoped>
.dashboard {
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