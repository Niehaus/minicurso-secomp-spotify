const maxMinRelation = {
  "popularity": {
    max: 100, min: 0
  },
  "acousticness": {
    max: 0.99, min: 0
  },
  "danceability": {
    max: 0.99, min: 0.07,
  },
  "duration_ms": {
    max: 913000, min: 25.600
  },
  "energy": {
    max: 1, min: 0
  },
  "instrumentalness": {
    max: 0.99, min: 0
  },
  "key": {
    max: 11, min: 0
  },
  "liveness": {
    max: 0.99, min: 0.01
  },
  "loudness": {
    max: 3.15, min: -33.4
  },
  "mode": {
    max: 1, min: 0
  },
  "speechiness": {
    max: 0.95, min: 0.02
  },
  "tempo": {
    max: 220, min: 58
  },
  "time_signature": {
    max: 5, min: 1
  },
  "valence": {
    max: 0.99, min: 0.02
  },
}

const normalize = (val, max, min) => { return (val - min) / (max - min); }

export const normalizeTrack = (track) => {
  let values = Object.values(track),
    normalizedValues = [];

  console.log({ values })

  values.forEach(value => {
    if (typeof value == 'number') {
      normalizedValues.push(normalize(value))
    }
  });

  return normalizedValues;
}

export const cosinesim = (A, B) => {
  var dotproduct = 0;
  var mA = 0;
  var mB = 0;
  for (let i = 0; i < A.length; i++) { // here you missed the i++
    dotproduct += (A[i] * B[i]);
    mA += (A[i] * A[i]);
    mB += (B[i] * B[i]);
  }
  mA = Math.sqrt(mA);
  mB = Math.sqrt(mB);
  var similarity = (dotproduct) / ((mA) * (mB)) // here you needed extra brackets
  return similarity;
}