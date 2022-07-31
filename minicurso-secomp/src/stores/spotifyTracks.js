import { defineStore } from "pinia";
import loadTracks from "./storeUtils";

export const useSpotifyTracksStore = defineStore({
  id: "spotifyTracks",
  state: () => ({
    trakcs: [],
    rockSamples: [],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
    getTracks: (state) => state.tracks,
    getRockSample: (state) => state.rockSamples,
  },
  actions: {
    async loadRockSamples() {
      return loadTracks("rockSample.json").then((samples) => {
        this.rockSamples = samples;
      });
    },
    loadTracks() {},
  },
});
