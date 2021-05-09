import Vuex from "vuex";
import Vue from "vue";
import times from "./modules/times";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    times,
  },
});
