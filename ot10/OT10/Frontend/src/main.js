import { createApp } from 'vue';
import App from './App.vue';
import router from './Router';
import store from './Store';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives
});

createApp(App)
    .use(router)
    .use(store)
    .use(vuetify)
    .mount('#app');