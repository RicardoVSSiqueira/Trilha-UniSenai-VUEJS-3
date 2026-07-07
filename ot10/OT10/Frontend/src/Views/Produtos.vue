<template>
    <div>
        <Navbar />

        <v-main class="Produtos">
            <v-container class="mt-5">

                <div class="d-flex justify-space-between align-center mb-4">
                    <h2 class="titulo">Gerenciar Produtos</h2>

                    <v-btn class="button rounded" @click="abrirModal()">
                        Novo Produto
                    </v-btn>
                </div>

                <v-text-field v-model="pesquisa" label="Pesquisar produto" prepend-inner-icon="mdi-magnify"
                    class="mb-4 titulo" />

                <v-table class="elevation-1 bg-light cards">

                    <thead>
                        <tr class="text-center">
                            <th>Nome</th>
                            <th>Categoria</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody class="text-center ">

                        <tr v-for="produto in produtosFiltrados" :key="produto.id">

                            <td>{{ produto.nome }}</td>

                            <td>{{ produto.categoria }}</td>

                            <td>
                                R$ {{ produto.preco }}
                            </td>

                            <td>{{ produto.descricao }}</td>

                            <td>

                                <v-btn icon="mdi-pencil" color="warning" size="small" class="me-2 "
                                    @click="abrirModal(produto)" />

                                <v-btn icon="mdi-delete" color="error" size="small"
                                    @click="deletarProduto(produto.id)" />

                            </td>

                        </tr>

                    </tbody>

                </v-table>

                <v-dialog v-model="modal" max-width="600">
                    <v-card class="produtoCadastro">
                        <v-card-title>
                            {{ produto.id ? 'Editar Produto' : 'Cadastrar Produto' }}
                        </v-card-title>

                        <v-card-text>

                            <v-alert v-if="erroModal" type="error" class="mb-4">

                                {{ erroModal }}

                            </v-alert>

                            <v-form @submit.prevent="salvarProduto">
                                <v-text-field v-model="produto.nome" label="Nome" variant="outlined" required />

                                <v-text-field v-model="produto.preco" label="Preço" type="number"
                                    prepend-inner-icon="mdi-currency-brl" variant="outlined" required />

                                <v-select v-model="produto.categoria" variant="outlined" :items="categoriasOptions"
                                    label="Categoria" :menu-props="{ contentClass: 'categoria-menu' }" required />

                                <v-textarea v-model="produto.descricao" label="Descrição" variant="outlined" required />

                            </v-form>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer />

                            <v-btn variant="text" @click="modal = false">
                                Cancelar
                            </v-btn>

                            <v-btn color="primary" @click="salvarProduto">
                                Salvar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

            </v-container>
        </v-main>
    </div>
</template>

<script>
import Navbar from '../Componentes/Navbar.vue';
import api from '../service/api';

export default {
    components: {
        Navbar
    },

    data() {
        return {
            produtos: [],
            pesquisa: '',
            modal: false,
            erroModal: '',

            produto: {
                id: null,
                nome: '',
                preco: '',
                categoria: '',
                descricao: ''
            },

            categoriasOptions: [
                'Eletrônico/Informática',
                'Vestuário',
                'Móveis',
                'Outros'
            ],

        };
    },

    computed: {
        produtosFiltrados() {
            return this.produtos.filter(produto =>
                produto.nome.toLowerCase().includes(this.pesquisa.toLowerCase()) ||
                produto.categoria.toLowerCase().includes(this.pesquisa.toLowerCase())
            );
        }
    },

    watch: {
        produto: {
            deep: true,
            handler() {
                if (this.erroModal) {
                    this.erroModal = '';
                }
            }
        }
    },

    methods: {
        async listarProdutos() {
            const resposta = await api.get('/produtos');
            this.produtos = resposta.data;
        },

        abrirModal(produto = null) {
            this.erroModal = '';
            if (produto) {
                this.produto = { ...produto };
            } else {
                this.produto = {
                    id: null,
                    nome: '',
                    preco: '',
                    categoria: '',
                    descricao: ''
                };
            }

            this.modal = true;
        },

        async salvarProduto() {

            try {
                this.erro = '';
                this.erroModal = '';

                if (
                    !this.produto.nome ||
                    !this.produto.preco ||
                    !this.produto.categoria ||
                    !this.produto.descricao
                ) {
                    this.erroModal = 'Preencha todos os campos obrigatórios.';
                    return;
                }

                if (this.produto.id) {
                    await api.put(`/produtos/${this.produto.id}`, this.produto);
                } else {
                    await api.post('/produtos', this.produto);
                }

                this.modal = false;
                await this.listarProdutos();

            } catch (error) {
                this.erro = 'Erro ao salvar produto.';
            }
        },

        async deletarProduto(id) {
            try {
                await api.delete(`/produtos/${id}`);
                await this.listarProdutos();
            } catch (error) {
                this.erroModal = 'Erro ao salvar produto.';
            }
        }
    },

    mounted() {
        this.listarProdutos();
    }
};
</script>




<style>
.Produtos {
    min-height: 100vh;
    background-color: #f2f2f2;
}

.cards {
    color: #000000;

}

.produtoCadastro {
    background-color: #fafafa;
    color: #000000;
}

.texto {
    color: #ffffff;
}

.titulo {
    color: #000000;
}

.button {
    background-color: #000000;

}

.categoria-menu {
    background-color: #1a1a1a !important;
    border-radius: 12px !important;
}

.categoria-menu .v-list-item--active {
    background-color: #1a1a1a !important;
    color: #ffffff !important;
}
</style>