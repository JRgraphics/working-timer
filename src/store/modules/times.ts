import { putFrontZeroes } from "@/helpers/dateTimeConver";
import { Commit } from "vuex";
import { getField, updateField } from "vuex-map-fields";

const state = {
  times: [
    {
      comment: "",
      end: null,
      id: 0,
      name: "Asiakas1",
      start: null,
      time: 0,
      timeString: "00:00:00",
    },
  ],
  active: -1,
  doneItems: [],
  interval: 0,
};

const getters = {
  allTimes: (state: any) => state.times,
  active: (state: any) => state.active,
  doneItems: (state: any) => state.doneItems,
  getField,
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
  addComment({ commit }: { commit: Commit }, payload: any) {
    commit("addComment", payload);
  },
};

const mutations = {
  resetState(state: any) {
    state.active = -1;
    clearInterval(state.interval);
    state.times = [];
    state.doneItems = [];
  },
  resetInterval(state: any) {
    clearInterval(state.interval);
    state.active = -1;
  },
  startTimer(state: any, index: number) {
    clearInterval(state.interval);
    if (index === state.active) {
      state.active = -1;
      state.times[index].end = putFrontZeroes(new Date());
      state.doneItems.push(index);
    } else {
      state.active = index;
      state.times[index].start = putFrontZeroes(new Date());
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
      comment: "",
    });
  },
  addComment(state: any, payload: any) {
    console.log(payload);
    state.times[payload.index].comment = payload.comment;
  },
  removeClient(state: any, index: number) {
    if (index === state.active) {
      clearInterval(state.interval);
      state.active = -1;
    }
    state.times.splice(index, 1);
  },
  updateField,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
