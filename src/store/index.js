import Vue from "vue";
import Vuex from "vuex";
import favorites from "./modules/favorites";
import search from "./modules/search";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    favorites,
    search,
  },
});
