// const note1 = document.getElementById("note1Field")
// const note2 = document.getElementById("note2Field")
// const note3 = document.getElementById("note3Field")
// const note4 = document.getElementById("note4Field")
const result = document.getElementById("result")
// const button = document.getElementById("submitGuess")

const chordTypes = [
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

const findChordTypes = (str) => {
  let theResult = chordTypes.find((el) => el.code === str)
  if (theResult == undefined) {
    return
  } else { return theResult.name }
}

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

//
// Find chord quality
//
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


//this works

// str = `.2.3.7`
// let chordName = ``
//   if (str.includes(`.7`)) {
//     if (str.includes(`.2`)) {
//       if (!str.includes(`.3`)) {
//           chordName += `sus2`
//         }
//       if (str.includes(`.3`)) {
//           chordName += `minoradd9`
//         }
//       }
//   }
// console.log(chordName)


// str = `.2.4.7`
// let chordName = ``
//   if (str.includes(`.7`)) {
//     if (str.includes(`.2`)) {
//       if (!str.includes(`.4`)) {
//           chordName += `sus2`
//         }
//       if (str.includes(`.4`)) {
//           chordName += `majoradd9`
//         }
//       }
//   }
// console.log(chordName)


// Major, sus2, sus4, aug, dim or minor chord
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

// 5 Chord
const is5Chord = (str) => {
  if (str === "7") {
    return true
  } else {
    return false
  }
}

// function mainFunc() {
//   let chordResult = (makeChordCode(
//     convertToSharp(note1.value).toUpperCase(),
//     convertToSharp(note2.value).toUpperCase(),
//     convertToSharp(note3.value).toUpperCase(),
//     convertToSharp(note4.value).toUpperCase())
//   )
//   chordResult = chordResult.join('.').toString()
//   let firstDot = `.`
//   chordResult = firstDot.concat(chordResult)
//   console.log(`chord result is ${chordResult}`)
//   result.innerHTML = `${note1.value.toUpperCase()} ${findChordTypes(chordResult)}`
// }

// note1.addEventListener('keyup', function(){
//   mainFunc()
// })
// note2.addEventListener('keyup', function(){
//   mainFunc()
// })
// note3.addEventListener('keyup', function(){
//   mainFunc()
// })
// note4.addEventListener('keyup', function(){
//   mainFunc()
// })

// button.addEventListener('click', function(e) {
//   e.preventDefault()
//   mainFunc()
// })

let down = false
window.addEventListener('keydown', function(e) {
  // if (down===true) {return}
  // down = true
  const key = document.querySelector(`.key[data-key="${e.keyCode}"] `)
  const keyNote = document.querySelector(`.key[data-key="${e.keyCode}"] p`)
  console.log(keyNote.textContent)
  if(key==null) {return}
  key.classList.add("playing")
  // down = false
})


window.addEventListener('keyup', function(e){
  // down = true
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  const keyNote = document.querySelector(`.key[data-key="${e.keyCode}"] p`)
  console.log(keyNote.textContent)
  if(key==null) {return}
  key.classList.remove("playing")
})

var allowed = true;
let notesArr = []

const sort = (str) => {
//     let itemsOrdered = []
//     const theOrder = [65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74, 75, 79, 76, 80, 186, 222]
//     for (var j = 0; j <= str.length; j++) {
//         if (notesArr.indexOf(theOrder[j]) > -1) {
//             itemsOrdered.push(theOrder[j]);
//         }
//     console.log(itemsOrdered);
        console.log(str)
//     }
}

// let theArr = ["C", "D#", "G"]

// let chordResult = makeChordCode(...theArr)
// chordResult = chordResult.join('.').toString()
// let firstDot = `.`
// chordResult = firstDot.concat(chordResult)
// console.log(chordResult)


window.addEventListener("keydown", function(e) {
  if (event.repeat != undefined) {
    allowed = !event.repeat;
  }
  if (!allowed) return;
  allowed = false;
    let oneNote = document.querySelector(`.key[data-key="${e.keyCode}"] p`).textContent
    notesArr.push(oneNote)
    console.log(notesArr)
    let theChordCode = (makeChordCode(...notesArr)).join(".").toString()
    let firstDot = `.`
    theChordCode = firstDot.concat(theChordCode)
    console.log(theChordCode)
    result.innerHTML = `${notesArr[0]} ${findChordTypes(theChordCode)}`
})
window.addEventListener("keyup", function(e){
    allowed = true;
    let oneNote = document.querySelector(`.key[data-key="${e.keyCode}"] p`).textContent
    notesArr.pop(oneNote)
    let theChordCode = (makeChordCode(...notesArr)).join(".").toString()
    let firstDot = `.`
    theChordCode = firstDot.concat(theChordCode)
    console.log(theChordCode)
    result.innerHTML = `${notesArr[0]} ${findChordTypes(theChordCode)}`

})


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
let context = null;
let oscillator = null;

const getOrCreateContext = () => {
  if (!context) {
    context = new AudioContext();
    oscillator = context.createOscillator();
    oscillator.type = "triangle";
    oscillator.connect(context.destination);
  }
  return context;
};

let isStarted = false;

const noteOn = midiNote => {
  getOrCreateContext();
  const freq = Math.pow(2, (midiNote - 69) / 12) * 440;
  oscillator.frequency.setTargetAtTime(freq, context.currentTime, 0);
  if (!isStarted) {
    oscillator.start(0);
    isStarted = true;
  } else {
    context.resume();
  }
};

const noteOff = () => {
  context.suspend();
};

// Below is keyboard emulation for C4-F5 a-' keys
const emulatedKeys = {
  a: 60,
  w: 61,
  s: 62,
  e: 63,
  d: 64,
  f: 65,
  t: 66,
  g: 67,
  y: 68,
  h: 69,
  u: 70,
  j: 71,
  k: 72,
  o: 73,
  l: 74,
  p: 75,
  ";": 76,
  "'": 77
};

document.addEventListener("keydown", e => {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(e);
  if (emulatedKeys.hasOwnProperty(e.key)) {
    noteOn(emulatedKeys[e.key]);
    key.classList.add('playing');
    setTimeout(() => {
      key.classList.remove('playing');
    }, 100);
  }
});

document.addEventListener("keyup", e => {
  if (emulatedKeys.hasOwnProperty(e.key)) {
    noteOff();
  }
});
//# sourceMappingURL=app.js.map
