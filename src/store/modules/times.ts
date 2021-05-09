import { Commit } from "vuex";
const state = {
  times: [
    { id: 0, name: "Asiakas1", time: 0, timeString: "00:00:00" },
    { id: 1, name: "Asiakas2", time: 0, timeString: "00:00:00" },
  ],
  active: -1,
  interval: 0,
};

const getters = {
  allTimes: (state: any) => state.times,
  active: (state: any) => state.active,
};

const actions = {
  handleEmpty({ commit }: { commit: Commit }) {
    commit("resetState");
  },
  handleStop({ commit }: { commit: Commit }) {
    commit("resetInterval");
  },
  startTimer({ commit }: { commit: Commit }, index: number) {
    commit("startTimer", index);
  },
  addClient({ commit }: { commit: Commit }, name: string) {
    commit("addClient", name);
  },
  removeClient({ commit }: { commit: Commit }, name: string) {
    commit("removeClient", name);
  },
};

const mutations = {
  resetState(state: any) {
    state.active = -1;
    clearInterval(state.interval);
    state.times = [];
  },
  resetInterval(state: any) {
    clearInterval(state.interval);
    state.active = -1;
  },
  startTimer(state: any, index: number) {
    clearInterval(state.interval);
    if (index === state.active) {
      state.active = -1;
    } else {
      state.active = index;
      state.interval = setInterval(() => {
        state.times[index].time += 1;
        state.times[index].timeString = new Date(state.times[index].time * 1000)
          .toISOString()
          .substr(11, 8);
      }, 1000);
    }
  },
  addClient(state: any, name: string) {
    state.times.push({
      id: Math.random(),
      name: name,
      time: 0,
      timeString: "00:00:00",
    });
  },
  removeClient(state: any, index: number) {
    if (index === state.active) {
      clearInterval(state.interval);
      state.active = -1;
    }
    state.times.splice(index, 1);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
