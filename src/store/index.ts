import Vuex from "vuex";
import Vue from "vue";
import times from "./modules/times";

import createPersistedState from "vuex-persistedstate";

// Load Vuex
Vue.use(Vuex);

// Load Vuex persist

// Create store
export default new Vuex.Store({
  modules: {
    times,
  },
  plugins: [createPersistedState()],
});
