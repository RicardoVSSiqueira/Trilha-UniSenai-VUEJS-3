<template>
    <div>
        <v-app-bar class="navbar">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

            <v-toolbar-title>OT10</v-toolbar-title>

            <v-spacer />

        </v-app-bar>

        <v-navigation-drawer v-model="drawer" class="drawer pt-2 " temporary>
            <v-list>
                <v-list-item title="Dashboard" class="text-decoration-none navbarTexto " to="/dashboard" />

                <v-list-item title="Produtos" class="text-decoration-none navbarTexto" to="/produtos" />

                <v-list-item title="Sair " class="navbarTexto" @click="logout" />
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const drawer = ref(false);
const router = useRouter();

function logout() {
    localStorage.removeItem('token');
    router.push('/login');
}
</script>

<style>
.navbar {
    background-color: #000000;
}

.drawer {
    background: #1a1a1a !important;
}

.navbarTexto {
    color: #ffffff !important;
}
.navbarTexto:hover{
    background-color: #333333 !important;
}
</style>