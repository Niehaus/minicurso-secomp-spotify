<script>
export default {
  name: "TrackCard",
  props: {
    artist_name: {
      type: String,
      default: "Ariana Grande",
    },
    track_name: {
      type: String,
      default: "Positions",
    },
    key_note: {
      type: String,
      default: "D#",
    },
    popularity: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {};
  },
  computed: {
    vagalumeLink() {
      return this.createVagalumeLink();
    },
  },
  methods: {
    createVagalumeLink() {
      let name = this.artist_name.toLowerCase().replace(" ", "-"),
        song = this.track_name.toLowerCase().replace(" ", "-");
      console.log(`www.vagalume.com/${name}/${song}.html`);
      return `www.vagalume.com/${name}/${song}.html`;
    },
  },
};
</script>

<template>
  <div class="card m-2" style="width: 18rem; display: inline-block">
    <div class="card-body">
      <h5 class="card-title">{{ track_name }} - {{ key_note }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ artist_name }}</h6>
      <p class="card-text">
        This song reached the popularity of <span>{{ popularity }}</span>
      </p>
      <a :href="vagalumeLink" class="card-link">Link to Vagalume</a>
    </div>
  </div>
</template>

<style scoped>
/* Sinta-se a vontade para mudar as cores e deixar o card do seu jeito :D */
.card {
  background-color: aliceblue;
  border: 2px dotted mediumaquamarine;
}

.card-text span {
  color: pink;
  font-weight: bold;
}
</style>
