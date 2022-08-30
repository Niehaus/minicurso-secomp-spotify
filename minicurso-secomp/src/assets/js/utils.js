const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const randomizeTracks = (tracks) => {
  let randomTracks = [];
  let len = tracks.length;

  for (let i = 0; i < 12; i++) {
    let index = getRandomInt(0, len);
    randomTracks.push(tracks[index]);
  }

  return randomTracks;
}

export default randomizeTracks