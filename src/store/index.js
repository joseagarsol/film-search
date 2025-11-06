import Vue from "vue";
import Vuex from "vuex";
import favorites from "./modules/favorites";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    favorites,
  },
});
