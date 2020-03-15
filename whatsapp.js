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
const makeTriad = (str) => {
  if (str.includes(".7")) {
    if (str.includes(".2")) {
        return ("sus2")
    } else if (str.includes(".3")) {
        return ("minor")
    } else if (str.includes(".4")) {
        return ("major")
    } else if (str.includes(".5")) {
        return ("sus4")
    } else {return ("not valid chord")}
  } else if (str.includes(".6")) {
    if (str.includes(".3")) {
      return ("dim")
    } else if (str.includes(".4")) {
      return ("major ♭5")
    } else {return ("not valid chord")}
  } else if (str.includes(".8")) {
    if (str.includes(".4")) {
      return ("aug")
    } else {return ("not valid chord")}
  }
}

const seventh = (str) => {
  addSeventh = ``
  if (str.includes(`.10`)) {
    addSeventh += `7`
  } else if (str.includes(`.11`)){
    addSeventh += `maj7`
  }
  return addSeventh
}

const secondOrNinth = (str) => {
  let extension = ``
  if (str.includes(`2`) && str.includes(`.3`) || str.includes(`2`) && str.includes(`.4`) ) {
     extension += `add2`
  } else if (str.includes(`.14`) && str.includes(`.3`) || str.includes(`.14`) && str.includes(`.4`) ) {
    extension += `add9`
  }
  return extension
}

let noteOne = "F"
let noteTwo = "A"
let noteThree = "C"

const firstDot = `.`
let theString = makeChordCode(noteOne, noteTwo, noteThree).join(".").toString()

const mainString = firstDot.concat(theString)

console.log(`${noteOne} ${makeTriad(mainString)} ${seventh(mainString)} ${secondOrNinth(mainString)}`)