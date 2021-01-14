import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Chart from "@/components/Chart";
import Search from "@/components/Search";

import { Helpers } from "@/mixins/Helpers.js";

createApp(App)
  .mixin(Helpers)
  .component('Search', Search)
  .component('Chart', Chart)
  .use(store)
  .use(router)
  .mount("#app");
