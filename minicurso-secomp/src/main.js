import jquery from "jquery";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

window.$ = window.jQuery = jquery;

import "./assets/main.css";

/* Importa de Components Globais */
import CustomFooter from "./components/CustomFooter.vue";
import CustomHeader from "./components/CustomHeader.vue";

const app = createApp(App);

app.component("CustomFooter", CustomFooter);
app.component("CustomHeader", CustomHeader);

app.use(createPinia());
app.use(router);

app.mount("#app");
