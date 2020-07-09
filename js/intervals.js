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

const makeChordCode = (...arr) => {
  let chord = []
  const notesArrChordCode = [
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
  for (let i=1; i < arr.length; i++) {
    let current = notesArrChordCode.indexOf( arr[i] )
    let first = notesArrChordCode.indexOf( arr[0] )
    if (Math.sign(current - first) !== -1) {
      chord.push(current - first)
    } else {
      chord.push((current - first)+12)}
    }
  return chord
}

const findChordTypes = str => {
  const theResult = chordTypes.find((el) => el.code === str)
  if (theResult !== undefined)
  return theResult.name
}

const removePlaying = e => {
  const keyRemove = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if ( keyRemove !== null ) keyRemove.classList.remove("playing")
}

const addPlaying = e => {
  const keyAdd = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if ( keyAdd !== null ) keyAdd.classList.add("playing")
}

// const sort = (str) => {
//     let itemsOrdered = []
//     const theOrder = [65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74, 75, 79, 76, 80, 186, 222, 221, 220]
//     for (var j = 0; j <= str.length; j++) {
//         if (notesArr.indexOf(theOrder[j]) > -1) {
//             itemsOrdered.push(theOrder[j]);
//         }
//     console.log(itemsOrdered);
//     console.log(str)
//     }
// }

const addNote = e => {
  if (document.querySelector(`.key[data-key="${e.keyCode}"]`)) {
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
      // const jsonObj = {
      //   note: `${oneNote}`,
      //   keyCode: `${e.keyCode}`
      // }
      // notesArr = [...notesArr, jsonObj]
      // notesArr.push(jsonObj)
      // testArr.push(jsonObj)
      // notesArr = testArr
    }
    // console.log(testArr)
    // console.log(notesArr)
    let theChordCode = (makeChordCode(...notesArr))
    .join(".").toString()
    if (theChordCode !== "") {
      theChordCode = `.`.concat(theChordCode)
      result.innerHTML = `Chord: ${notesArr[0]} ${findChordTypes(theChordCode)}`
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

    let theChordCode = (makeChordCode(...notesArr)).join(".").toString()
    theChordCode = `.`.concat(theChordCode)

    if (notesArr === undefined || notesArr.length === 0) {
      result.innerHTML = `Chord:`
    } else {
      result.innerHTML = `Chord: ${notesArr[0]} ${findChordTypes(theChordCode)}`
    }
  }
}

window.addEventListener("keydown", e => {
  addNote(e)
  addPlaying(e)
})

window.addEventListener("keyup", e => {
  removeNote(e)
  removePlaying(e)
})

// const sort = (str) => {
//     let itemsOrdered = []
//     const theOrder = [65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74, 75, 79, 76, 80, 186, 222, 221, 220]
//     for (var j = 0; j <= str.length; j++) {
//         if (notesArr.indexOf(theOrder[j]) > -1) {
//             itemsOrdered.push(theOrder[j]);
//         }
//     console.log(itemsOrdered);
//     console.log(str)
//     }
// }