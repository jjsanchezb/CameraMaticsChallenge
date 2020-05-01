import Vue from "vue";
import Vuex from "vuex";
import tracking from "../logic/tracking.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { samples: [] },
  mutations: {
    setSamples(state, samples) {
      samples.forEach(sample => {
        state.samples.push(sample);
      });
    }
  },
  actions: {
    async fillSamples({ commit }, urls) {
      for (const url of urls) {
        const data = await tracking.getTrackingData(url);
        commit("setSamples", data.samples);
      }
    }
  },
  getters: {
    markers: state => {
      state.samples.map(sample => {
        return { lat: sample.LAT, lng: sample.LNG };
      });
    }
  },
  modules: {}
});
