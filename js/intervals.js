// const note1 = document.getElementById("note1Field")
// const note2 = document.getElementById("note2Field")
// const note3 = document.getElementById("note3Field")
// const note4 = document.getElementById("note4Field")
// const button = document.getElementById("submitGuess")
const result = document.getElementById("result")

let allowed = true;
let notesArr = []

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
    "code": ".7",
    "name": "5",
  },
  {
    "code": ".4.7",
    "name": "",
  },
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
    "code": ".3.7.14",
    "name": "m9"
  },
  {
    "code": ".3.7.9",
    "name": "m6"
  },
  {
    "code": ".3.7.8",
    "name": "mflat6"
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
    "name": "m7flat5"
  },
  {
    "code": ".4.7.10",
    "name": "7"
  },
  {
    "code": ".2.7.9",
    "name": "6sus2"
  },
  {
    "code": ".5.7.10",
    "name": "7sus4"
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
  }
]

const makeChordCode = (note1, note2, note3, note4) => {
  let note1Index, note2Index, note3Index, note4Index
  let chord = []
  const notesArr = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B"
  ]
  note1Index = notesArr.indexOf(note1)
  note2Index = notesArr.indexOf(note2, note1Index)
  note3Index = notesArr.indexOf(note3, note2Index)
  note4Index = notesArr.indexOf(note4, note3Index)

  // console.log(`${note2Index - note1Index}`)

  if (Math.sign(note2Index - note1Index) !== -1) {
    chord.push(note2Index - note1Index)
  }
  if (Math.sign(note3Index - note1Index) !== -1) {
    chord.push(note3Index - note1Index)
  }
  if (Math.sign(note4Index - note1Index) !== -1) {
  chord.push(note4Index
     - note1Index
  )}
  console.log(`chord is ${chord}`)
  return chord
}

const findChordTypes = (str) => {
  console.log(str)
  const theResult = chordTypes.find((el) => el.code === str)
  if (theResult == undefined) {
    return
  } else {
    return theResult.name
  }
}

window.addEventListener('keydown', function(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"] `)
  if ( key==null ) {
    return
  }
  key.classList.add("playing")
})

window.addEventListener('keyup', function(e){
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if ( key==null ) {
    return
  }
  key.classList.remove("playing")
})

const sort = (str) => {
//     let itemsOrdered = []
//     const theOrder = [65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74, 75, 79, 76, 80, 186, 222]
//     for (var j = 0; j <= str.length; j++) {
//         if (notesArr.indexOf(theOrder[j]) > -1) {
//             itemsOrdered.push(theOrder[j]);
//         }
//     console.log(itemsOrdered);
//     console.log(str)
//     }
}

window.addEventListener("keydown", function(e) {
  let oneNote = document.querySelector(`.key[data-key="${e.keyCode}"] .js-note`).textContent
  // console.log(oneNote)
  if ( event.repeat != undefined ) {
    allowed = !event.repeat;
  }
  if ( !allowed ) return
  allowed = false;
  if (oneNote) {
    notesArr.push(oneNote)
  }
  let theChordCode = (makeChordCode(...notesArr)).join(".").toString()
  if (theChordCode !== "") {
    let firstDot = `.`
    theChordCode = firstDot.concat(theChordCode)
    result.innerHTML = `Chord: ${notesArr[0]} ${findChordTypes(theChordCode)}`
  }
})

window.addEventListener("keyup", function(e){
  let oneNote = document.querySelector(`.key[data-key="${e.keyCode}"] .js-note`).textContent
  allowed = true;
  if (oneNote) {
    notesArr.pop(oneNote)
  }
  let theChordCode = (makeChordCode(...notesArr)).join(".").toString()
  let firstDot = `.`
  theChordCode = firstDot.concat(theChordCode)
  if (notesArr === undefined || notesArr.length === 0) {
    console.log(`empty array`)
    result.innerHTML = `Chord:`
  } else {
  result.innerHTML = `Chord: ${notesArr[0]} ${findChordTypes(theChordCode)}`
  }
})

