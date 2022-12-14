import Vue from "vue";
import App from "./App.vue";

import "@/import/element";
import router from "@/router";

import "@/style/index.less";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
