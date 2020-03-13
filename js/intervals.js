const note1 = document.getElementById("note1Field")
const note2 = document.getElementById("note2Field")
const note3 = document.getElementById("note3Field")
const note4 = document.getElementById("note4Field")

const sharpBtn = document.getElementById("sharp-btn")
const flatBtn = document.getElementById("flat-btn")

const result = document.getElementById("result")
const button = document.getElementById("submitGuess")

const chordTypes = [
  {
    "code": "4.7",
    "name": ""
  },
  {
    "code": "3.7",
    "name": "m"
  },
  {
    "code": "2.7",
    "name": "sus2"
  },
  {
    "code": "5.7",
    "name": "sus4"
  },
  {
    "code": "4.7.11",
    "name": "maj7"
  },
  {
    "code": "4.7.10",
    "name": "7"
  },
  {
    "code": "3.7.10",
    "name": "m7"
  },
  {
    "code": "4.8",
    "name": "aug"
  },
  {
    "code": "3.6",
    "name": "dim"
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
  note1Index = notesArr.indexOf(note1);
  note2Index = notesArr.indexOf(note2, note1Index)
  note3Index = notesArr.indexOf(note3, note2Index)
  note4Index = notesArr.indexOf(note4, note3Index)

  chord.push(note2Index - note1Index, note3Index - note1Index)
  if (note4Index !== -1) {
  chord.push(note4Index
     - note1Index
  )}
  return chord
}

const makeNameSpan = (str) => {
  return `<span class="smaller">${str}</span>`
}

const findChordTypes = (str) => {
  let theResult = chordTypes.find((el) => el.code === str)
  return theResult.name
}

const convertToSharp = (str) => {
  if (str === "B♭" || str === "b♭") {
    str = "A#"
  } else if (str === "D♭" || str === "d♭") {
    str = "C#"
  } else if (str === "E♭" || str === "e♭") {
    str = "D#"
  } else if (str === "G♭" || str === "g♭") {
    str = "F#"
  } else if (str === "A♭" || str === "a♭") {
    str = "G#"
  }
  return str
}

// Event Listeners //
sharpBtn.addEventListener('click', function(e) {
  note1.value = note1.value + `#`
})

flatBtn.addEventListener('click', function(e) {
  note1.value = note1.value + `♭`
  // console.log(this)
})

button.addEventListener('click', function(e) {
  e.preventDefault()
  let chordResult = (makeChordCode(
    convertToSharp(note1.value).toUpperCase(),
    convertToSharp(note2.value).toUpperCase(),
    convertToSharp(note3.value).toUpperCase(),
    convertToSharp(note4.value).toUpperCase()))
  chordResult = chordResult.join('.').toString()
  console.log(`chord result is ${chordResult}`)
  result.innerHTML = `${note1.value.toUpperCase()} ${makeNameSpan(findChordTypes(chordResult))}`
})