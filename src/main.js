import { createApp } from "vue";
import "./style.css";
import router from "./Router";
import App from "./App.vue";
import { createPinia } from "pinia";
const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");
