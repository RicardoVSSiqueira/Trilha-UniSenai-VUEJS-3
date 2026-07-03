import { createApp } from 'vue';
import App from './App.vue';

// Exercício 1 (integração via NPM): importa o JS do Bootstrap (necessário para modais, dropdowns etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Exercício 8: o CSS do Bootstrap é importado a partir do custom.scss (que sobrescreve a cor primária)
// Obs: não importamos 'bootstrap/dist/css/bootstrap.min.css' aqui para evitar duplicar o CSS,
// já que o custom.scss abaixo já importa o Bootstrap inteiro via @import "bootstrap/scss/bootstrap".
import './assets/custom.scss';

createApp(App).mount('#app');