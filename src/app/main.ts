import "./app.css"
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

/**
 * Ponto de entrada (Entry Point) da aplicação Vue.
 * Responsável por inicializar o framework e injetar as dependências globais na ordem correta:
 * 1. Pinia (Gerenciamento de Estado Centralizado)
 * 2. Vue Router (Gestão de Navegação SPA)
 */
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");