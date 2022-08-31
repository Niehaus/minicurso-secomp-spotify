<script>
import TrackCard from "./TrackCard.vue";
import randomizeTracks from "../assets/js/utils.js";
import { similarityBetweenTracks } from "../assets/js/similarityUtils.js";
import { useSpotifyTracksStore } from "@/stores/spotifyTracks";

export default {
  name: "SimilarTracksRender",
  components: { TrackCard },
  data() {
    return {
      tracks: [],
      selectedTracks: [],
      showCards: false,
      nothingHappend: "Nenhuma ação ocorreu ainda ):",
    };
  },
  setup() {
    const store = useSpotifyTracksStore();

    return { store };
  },
  mounted() {
    this.store.loadRockSamples().then(() => {
      this.tracks = randomizeTracks(this.store.getRockSample);
      // console.log(similarityBetweenTracks(this.tracks[0], this.tracks[1]));
    });
  },
  methods: {
    compareRandomTracks() {
      console.log("ainda não fui implementado ): ");
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-2">
        <button type="button" class="btn btn-primary" @click="compareRandomTracks">
          Compare Músicas
        </button>
      </div>
      <template v-if="showCards">
        <div class="col-lg-10 d-flex align-items-start">
          <TrackCard v-for="(track, i) in selectedTracks" v-bind:key="i"></TrackCard>
          <span class="mt-2"> <b>Similaridade:</b> </span>
        </div>
      </template>
      <template v-else>
        <div class="col-lg-10 d-flex align-items-start">
          <span class="mt-2">
            <b>{{ nothingHappend }} </b>
          </span>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
