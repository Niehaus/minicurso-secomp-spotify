const loadTracks = async (filename) => {
  console.log("...loading tracks 📜");
  return fetch(`./dataset/${filename}`)
    .then((res) => res.json())
    .then((json) => {
      console.log("tracks loaded 😀!");
      return json;
    })
    .catch((error) => console.error("😅", error));
};

export default loadTracks;
