import { createApp } from "vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createPinia } from "pinia";
import App from "./App.vue";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App).use(pinia).mount("#app");
