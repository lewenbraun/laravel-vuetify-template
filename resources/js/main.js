
import App from "./App.vue";
import { createApp } from "vue";
import { registerPlugins } from "./plugins";

registerPlugins(createApp(App)).mount("#app");
