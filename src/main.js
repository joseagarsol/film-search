import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/styles/main.css";

Vue.config.productionTip = false;

Vue.filter("posterUrl", function (path, width) {
  if (!path) {
    return "https://via.placeholder.com/500x750?text=No+Image";
  }
  return `https://image.tmdb.org/t/p/${width}${path}`;
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
