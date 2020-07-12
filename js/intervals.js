// const note1 = document.getElementById("note1Field")
// const note2 = document.getElementById("note2Field")
// const note3 = document.getElementById("note3Field")
// const note4 = document.getElementById("note4Field")
// const button = document.getElementById("submitGuess")
const result = document.getElementById("result")

let allowed = true
let notesArr = []
let skippedNote = false
const chordTypes = [
  {
    "code": ".",
    "name": "",
  },
  {
    "code": ".4",
    "name": "",
  },
  {
    "code": ".3",
    "name": "m",
  },
  {
    "code": ".6",
    "name": "♭5",
  },
  {
    "code": ".7",
    "name": "5",
  },
  {
    "code": ".4.7",
    "name": ""
  },
  {
    "code": ".3.8",
    "name": "first inv"
  },
  {
    "code": ".5.9",
    "name": " second inv"
  },
  // {
  //   "code": {
  //     ".4.7": "root",
  //     ".3.8": "first inversion",
  //     ".5.9": "second inverstion"
  //   },
  //   "name": "",
  // },
  {
    "code": ".5.7",
    "name": "sus4"
  },
  {
    "code": ".2.7",
    "name": "sus2"
  },
  {
    "code": ".1.7",
    "name": "no3/5(♭9)"
  },
  {
    "code": ".6.7",
    "name": "no3/5(#11)"
  },
  {
    "code": ".6.7.11",
    "name": "no3/5/maj7(#11)"
  },
  {
    "code": ".7.10",
    "name": "no3/5 7"
  },
  {
    "code": ".4.7.14",
    "name": "(add9)"
  },
  {
    "code": ".4.7.9",
    "name": "6"
  },
  {
    "code": ".4.7.11",
    "name": "maj7"
  },
  {
    "code": ".4.7.11.2",
    "name": "maj7/9"
  },
  {
    "code": ".5.7.11",
    "name": "sus4/maj7"
  },
  {
    "code": ".7.11",
    "name": "no3/5/maj7"
  },
  {
    "code": ".3.7",
    "name": "m"
  },
  {
    "code": ".3.7.13",
    "name": "m add ♭9"
  },
  {
    "code": ".3.7.14",
    "name": "m add9"
  },
  {
    "code": ".3.7.17",
    "name": "m add11"
  },
  {
    "code": ".3.7.9",
    "name": "m6"
  },
  {
    "code": ".3.7.8",
    "name": "m ♭6"
  },
  {
    "code": ".3.7.10",
    "name": "m7"
  },
  {
    "code": ".3.7.11",
    "name": "m maj7"
  },
  {
    "code": ".3.6.10",
    "name": "m7 ♭5"
  },
  {
    "code": ".4.7.10",
    "name": "7"
  },
  {
    "code": ".2.7.9",
    "name": "6 sus2"
  },
  {
    "code": ".5.7.10",
    "name": "7 sus4"
  },
  {
    "code": ".4.8",
    "name": "aug"
  },
  {
    "code": ".3.6",
    "name": "dim"
  },
  {
    "code": ".3.6.9",
    "name": "dim7"
  },
  {
    "code": ".3.6.13",
    "name": "dim ♭9"
  },
  {
    "code": ".3.6.14",
    "name": "dim 9"
  },
  {
    "code": ".3.6.17",
    "name": "dim 11"
  },
  // {
  //   "code": ".3.8",
  //   "name": "major first inversion"
  // },
  // {
  //   "code": ".5.9",
  //   "name": "major second inversion"
  // }
]

const sortingArr = [ "C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6" ]


const makeChordCode = (...arr) => {
  // takes array of musical notes, return semitone intervals
  let chord = []
  arr.map(c => chord.push(sortingArr.indexOf(c)))
  return chord.map(c=>c-chord[0]).filter(c=>c!==0)
}

const findChordTypes = str => {
  // str is the chord code e.g. ".4.7.11"
  // theResult is an object e.g. {code: ".5.7", name: "sus4"}
  const theResult = chordTypes.find((el) => el.code === str)
  if (theResult !== undefined)
    return theResult.name
}

//
// Add and Remove CSS Classes
// get the DOM element via data-key and use it if not null

const addNote = e => {
  if (document.querySelector(`.key[data-key="${e.keyCode}"]`)) {
    // oneNote is the musical note name e.g. C OR F
    let oneNote = document.querySelector(`.key[data-key="${e.keyCode}"] .js-note`).textContent
    if ( event.repeat != undefined ) {
      allowed = !event.repeat
    }
    if ( !allowed ) return
    allowed = false
    if (notesArr.includes(oneNote))
      skippedNote = true
    if (oneNote && !notesArr.includes(oneNote)) {
      notesArr.push(oneNote)
    }
    let theChordCode = makeChordCode(...notesArr
      .sort((a,b)=>sortingArr.indexOf(a)-sortingArr.indexOf(b)))
      .join(".")
      .toString()
    theChordCode = `.`.concat(theChordCode)
    if (theChordCode !== ``) {
      result.innerHTML = `Chord: ${notesArr[0].replace(/\d/g, '')} ${findChordTypes(theChordCode)}`
    }
  }
}

const removeNote = e => {
  if (document.querySelector(`.key[data-key="${e.keyCode}"]`)) {
    let oneNote = document.querySelector(`.key[data-key="${e.keyCode}"] .js-note`).textContent

    allowed = true

    if (oneNote && skippedNote !== true) {
      notesArr.pop(oneNote)
    }

    skippedNote = false

    let theChordCode = (makeChordCode(...notesArr)).join(`.`).toString()
    theChordCode = `.`.concat(theChordCode)

    if (notesArr === undefined || notesArr.length === 0) {
      result.innerHTML = `Chord:`
    } else {
      result.innerHTML = `Chord: ${notesArr[0].replace(/\d/g, '')} ${findChordTypes(theChordCode)}`
    }
  }
}

const removePlaying = e => {
  const keyRemove = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if ( keyRemove !== null ) keyRemove.classList.remove(`playing`)
}

const addPlaying = e => {
  const keyAdd = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if ( keyAdd !== null ) keyAdd.classList.add(`playing`)
}

window.addEventListener("keydown", e => {
  addNote(e)
  addPlaying(e)
})

window.addEventListener("keyup", e => {
  removeNote(e)
  removePlaying(e)
})