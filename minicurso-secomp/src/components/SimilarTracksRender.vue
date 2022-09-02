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
      similarity: 0,
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
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },
    compareRandomTracks() {
      let len = this.tracks.length;

      let track1 = this.tracks[this.getRandomInt(0, len)];
      let track2 = this.tracks[this.getRandomInt(0, len)];

      this.similarity = similarityBetweenTracks(track1, track2).toFixed(2);

      console.log({ similaridade: this.similarity });
      this.selectedTracks.push(track1);
      this.selectedTracks.push(track2);

      this.showCards = true;
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
          <TrackCard
            v-for="(track, i) in selectedTracks"
            v-bind:key="i"
            :artist_name="track.artist_name"
            :popularity="track.popularity"
            :key_note="track.key"
            :track_name="track.track_name"
          ></TrackCard>
          <span class="mt-2"> <b>Similaridade:</b> {{ similarity }} </span>
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
