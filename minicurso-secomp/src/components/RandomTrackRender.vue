<script>
import TrackCard from "./TrackCard.vue";
import randomizeTracks from "../assets/js/utils.js";
import { useSpotifyTracksStore } from "@/stores/spotifyTracks";

export default {
  name: "RandomTrackRender",
  components: { TrackCard },
  data() {
    return {
      tracks: [],
    };
  },
  setup() {
    const store = useSpotifyTracksStore();

    return { store };
  },
  mounted() {
    this.store.loadRockSamples().then(() => {
      this.tracks = randomizeTracks(this.store.getRockSample);
    });
  },
  methods: {},
};
</script>

<template>
  <TrackCard v-for="(track, i) in tracks" v-bind:key="i"></TrackCard>
</template>

<style scoped></style>
