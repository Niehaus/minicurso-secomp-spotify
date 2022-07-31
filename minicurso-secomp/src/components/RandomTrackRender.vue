<script>
import TrackCard from "./TrackCard.vue";
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
      this.tracks = this.randomizeTracks(this.store.getRockSample);
    });
  },
  methods: {
    randomizeTracks(tracks) {
      let randomTracks = [];
      let len = tracks.length;

      for (let i = 0; i < 12; i++) {
        let index = this.getRandomInt(0, len);
        randomTracks.push(tracks[index]);
      }

      return randomTracks;
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },
  },
};
</script>

<template>
  <TrackCard v-for="(track, i) in tracks" v-bind:key="i"></TrackCard>
</template>

<style scoped></style>
