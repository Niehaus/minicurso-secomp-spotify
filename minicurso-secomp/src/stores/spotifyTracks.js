import { defineStore } from "pinia";
import loadTracks from "./storeUtils";

export const useSpotifyTracksStore = defineStore({
  id: "spotifyTracks",
  state: () => ({
    tracks: [],
    rockSamples: [],
  }),
  getters: {
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