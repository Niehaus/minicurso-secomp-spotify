<script>
import TrackCard from "./TrackCard.vue";
import randomizeTracks from "../assets/js/utils.js";
import { normalizeTrack } from "../assets/js/similarityUtils.js";
import { useSpotifyTracksStore } from "@/stores/spotifyTracks";

export default {
  name: "SimilarTracksRender",
  components: { TrackCard },
  data() {
    return {
      tracks: [],
      selectedTracks: [],
      showCards: false,
    };
  },
  setup() {
    const store = useSpotifyTracksStore();

    return { store };
  },
  mounted() {
    this.store.loadRockSamples().then(() => {
      this.tracks = randomizeTracks(this.store.getRockSample);

      console.log(normalizeTrack(this.tracks[0]));
    });
  },
  methods: {},
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-2">
        <button type="button" class="btn btn-primary">Compare Músicas</button>
      </div>
      <template v-if="showCards">
        <div class="col-lg-10">
          <TrackCard v-for="(track, i) in selectedTracks" v-bind:key="i"></TrackCard>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
