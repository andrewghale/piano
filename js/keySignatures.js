let majorKeys = [
  {
    "note": "C",
    "enharmonic": "none",
    "minor": "A",
    "sharps": 0,
    "flats": 0
  },
  {
    "note": "G",
    "enharmonic": "none",
    "minor": "E",
    "sharps": 1,
    "flats": 0
  },
  {
    "note": "D",
    "enharmonic": "none",
    "minor": "B",
    "sharps": 2,
    "flats": 0
  },
  {
    "note": "A",
    "enharmonic": "none",
    "minor": "Fsharp",
    "sharps": 3,
    "flats": 0
  },
  {
    "note": "E",
    "enharmonic": "none",
    "minor": "Csharp",
    "sharps": 4,
    "flats": 0
  },
  {
    "note": "B",
    "enharmonic": "Cflat",
    "minor": "Gsharp",
    "sharps": 5,
    "flats": 7
  },
  {
    "note": "Fsharp",
    "enharmonic": "Gflat",
    "minor": "Dsharp",
    "sharps": 6,
    "flats": 6
  },
  {
    "note": "Dflat",
    "enharmonic": "Csharp",
    "minor": "Bflat",
    "sharps": 7,
    "flats": 5
  },
  {
    "note": "Aflat",
    "enharmonic": "none",
    "minor": "F",
    "sharps": 0,
    "flats": 4
  },
  {
    "note": "Eflat",
    "enharmonic": "none",
    "minor": "C",
    "sharps": 0,
    "flats": 3
  },
  {
    "note": "Bflat",
    "enharmonic": "none",
    "minor": "G",
    "sharps": 0,
    "flats": 2
  },
  {
    "note": "F",
    "enharmonic": "none",
    "minor": "D",
    "sharps": 0,
    "flats": 1
  }
]
const accidentals = note => {
    let entry = majorKeys
      .find(x => x.note === note )

    const { sharps, flats } = entry

    if ( sharps === flats ) {
      return `6 sharps/flats`
    } else if (Math.abs(sharps-flats)===2) {
      return flats < sharps ? `${flats} flats` : `${sharps} sharps`
    } else if ( sharps === 0 ) {
      return `${flats} ${flats===1 ? 'flat' : 'flats'}`
    } else if ( flats === 0 ) {
      return `${sharps} ${sharps===1 ? 'sharp' : 'sharps'}`
    }
}

const relativeMinor = note => majorKeys.find(x=>x.note===note).minor

// relativeMinor("G")

const musicalKey = note => {
  return `${note} major contains ${accidentals(note)}`
}
musicalKey("D")
// accidentals("E")

