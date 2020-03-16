
Find chord quality

const findChordQuality = (str) => {
  if (str.includes("4") === true) {
    // any chord with a 4 in the code has a major third
    console.log("major")
  return "major"
  } else if (str.substring(0, 5).includes("3")){
    // if 3 is included in first 5 characters, it is a minor 3rd. substring is used as a 13 chord with no 3rd would return as minor
    console.log("minor")
  return "minor"
  }
}


this works

str = `.2.3.7`
let chordName = ``
  if (str.includes(`.7`)) {
    if (str.includes(`.2`)) {
      if (!str.includes(`.3`)) {
          chordName += `sus2`
        }
      if (str.includes(`.3`)) {
          chordName += `minoradd9`
        }
      }
  }
console.log(chordName)


str = `.2.4.7`
let chordName = ``
  if (str.includes(`.7`)) {
    if (str.includes(`.2`)) {
      if (!str.includes(`.4`)) {
          chordName += `sus2`
        }
      if (str.includes(`.4`)) {
          chordName += `majoradd9`
        }
      }
  }
console.log(chordName)


Major, sus2, sus4, aug, dim or minor chord
const makeTriad = (str) => {
  chordName = ``
  if (str.includes(`.7`)) {
    if (str.includes(`.2`)) {
      if (!str.includes(`.3`)) {
          chordName += `sus2`
        }
      }
    else if (str.includes(`.3`)) {
      chordName += `minor`
    } else if (str.includes(`.4`)) {
      chordName += `major`
    } else if (str.includes(`.5`)) {
      chordName += `sus4`
    } else {return (`not valid chord`)}
  } else if (str.includes(`.6`)) {
    if (str.includes(`.3`)) {
      chordName += `dim`
    } else if (str.includes(`.4`)) {
      chordName += `major ♭5`
    } else {return (`not valid chord`)}
  } else if (str.includes(`.8`)) {
    if (str.includes(`.4`)) {
      chordName += `aug`
    } else {return (`not valid chord`)}
  }
  return chordName
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

5 Chord
const is5Chord = (str) => {
  if (str === "7") {
    return true
  } else {
    return false
  }
}

function mainFunc() {
  let chordResult = (makeChordCode(
    convertToSharp(note1.value).toUpperCase(),
    convertToSharp(note2.value).toUpperCase(),
    convertToSharp(note3.value).toUpperCase(),
    convertToSharp(note4.value).toUpperCase())
  )
  chordResult = chordResult.join('.').toString()
  let firstDot = `.`
  chordResult = firstDot.concat(chordResult)
  console.log(`chord result is ${chordResult}`)
  result.innerHTML = `${note1.value.toUpperCase()} ${findChordTypes(chordResult)}`
}

note1.addEventListener('keyup', function(){
  mainFunc()
})
note2.addEventListener('keyup', function(){
  mainFunc()
})
note3.addEventListener('keyup', function(){
  mainFunc()
})
note4.addEventListener('keyup', function(){
  mainFunc()
})

button.addEventListener('click', function(e) {
  e.preventDefault()
  mainFunc()
})


const convertToSharp = (str) => {
  if (str === `B♭` || str === "b♭") {
    str = "A#"
  } else if (str === "E♭" || str === "e♭") {
    str = "D#"
  } else if (str === "A♭" || str === "a♭") {
    str = "G#"
  } else if (str === "D♭" || str === "d♭") {
    str = "C#"
  } else if (str === "G♭" || str === "g♭") {
    str = "F#"
  } else if (str === "C♭" || str === "c♭") {
    str = "B"
  } else if (str === "F♭" || str === "f♭") {
    str = "E"
  }
  return str
}

//////
// seems to work below

// var allowed = true;
// let notesArr = []

// window.addEventListener("keydown", function(e) {
//   if (event.repeat != undefined) {
//     allowed = !event.repeat;
//   }
//   if (!allowed) return;
//   allowed = false;
// //     console.log("key down")
//     let keyCode = e.keyCode.toString()
//     notesArr.push(keyCode)
//     console.log(notesArr.join(".").toString())
// })
// window.addEventListener("keyup", function(e){
//     allowed = true;
// //     console.log("key up")
//     let keyCode = e.keyCode.toString()
// //     console.log(e.keyCode)
//     notesArr.pop(keyCode)
//     console.log(notesArr.join(".").toString())
// })