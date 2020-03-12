const note1 = document.getElementById("note1Field")
const note2 = document.getElementById("note2Field")
const result = document.getElementById("result")
const button = document.getElementById("submitGuess")


const intervalNames = {
  0: "Unison",
  1: "Minor 2nd (1 semitone)",
  2: "Major 2nd (2 semitones)",
  3: "Minor 3rd (3 semitones)",
  4: "Major 3rd (4 semitones)",
  5: "Perfect 4th (5 semitones)",
  6: "Diminished 5th / Augmented 4th (6 semitones)",
  7: "Perfect 5th (7 semitones)",
  8: "Minor 6th (8 semitones)",
  9: "Major 6th (9 semitones)",
  10: "Minor 7th (10 semitones)",
  11: "Major 7th (11 semitones)",
  12: "Octave (12 semitones)"
}

function noteNumber(note1, note2) {
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
    "B"
  ]
  // get index of note 1 in array
  let note1Index = notesArr.indexOf(note1);
  // split orig array after first note
  // to make new array for finding second notes index
  let secondNotesArr = notesArr.splice(note1Index + 1)
  // get index of second note in second array
  let note2Index = secondNotesArr.indexOf(note2)
  return(intervalNames[note2Index + 1])
}

button.addEventListener('click', function(e) {
  e.preventDefault()
  const interval = noteNumber(note1.value.toUpperCase(), note2.value.toUpperCase())
  result.innerHTML = `The interval from ${note1.value.toUpperCase()} to ${note2.value.toUpperCase()} is a ${interval}`
})