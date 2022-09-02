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
      console.log({ tracks: this.tracks });
    });
  },
  methods: {},
};
</script>

<template>
  <TrackCard
    v-for="(track, i) in tracks"
    v-bind:key="i"
    :artist_name="track.artist_name"
    :popularity="track.popularity"
    :key_note="track.key"
    :track_name="track.track_name"
  ></TrackCard>
</template>

<style scoped></style>
