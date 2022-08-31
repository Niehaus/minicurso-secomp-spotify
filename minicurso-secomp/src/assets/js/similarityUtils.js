/* 
* Objecto que relaciona os atributos a seus respectivos valores de intervalo
**/
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

/* 
* Normalização dos valores no intervalo 0 a 1
**/
const normalize = (val, max, min) => { return (val - min) / (max - min); }

/* 
* Seleção de atributos númericos das músicas, normaliza-os 
* e forma um novo array de valores normalizados
**/
const normalizeTrack = (track) => {
  let normalizedValues = [], notNormalizedValues = [];

  for (const [key, value] of Object.entries(track)) {
    if (typeof value == 'number' && key in maxMinRelation) {
      const { max, min } = maxMinRelation[key]
      normalizedValues.push(normalize(value, max, min) > 0.5 ? 1 : 0)
      notNormalizedValues.push(value)
    }
  }
  console.log({ normalizedValues, notNormalizedValues })
  return normalizedValues;
}

/* 
* Seleção de atributos númericos das músicas, normaliza-os 
* e forma um novo array de valores normalizados
**/
const cosinesim = (A, B) => {

  let norm_A = normalizeTrack(A),
    norm_B = normalizeTrack(B)

  var dotproduct = 0;
  var mA = 0;
  var mB = 0;
  for (let i = 0; i < norm_A.length; i++) {
    dotproduct += (norm_A[i] * norm_B[i]);
    mA += (norm_A[i] * norm_A[i]);
    mB += (norm_B[i] * norm_B[i]);
  }
  mA = Math.sqrt(mA);
  mB = Math.sqrt(mB);
  var similarity = (dotproduct) / ((mA) * (mB))

  return similarity;
}

export const similarityBetweenTracks = (t1, t2) => { return cosinesim(t1, t2); }