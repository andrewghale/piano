// const note1 = document.getElementById("note1Field")
// const note2 = document.getElementById("note2Field")
// const note3 = document.getElementById("note3Field")
// const note4 = document.getElementById("note4Field")
// const button = document.getElementById("submitGuess")
const result = document.getElementById("result");

let allowed = true;
let notesArr = [];
let skippedNote = false;
const chordTypes = [
  {
     "name":"augmented",
     "code":"0.4.8",
     "quality":"augmented"
  },
  {
     "name":"augmented-eleventh",
     "code":"0.4.7.10.14.18",
     "quality":"major"
  },
  {
     "name":"augmented-major-seventh",
     "code":"0.4.8.11",
     "quality":"augmented"
  },
  {
     "name":"augmented-seventh",
     "code":"0.4.8.10",
     "quality":"augmented"
  },
  {
     "name":"augmented-sixth",
     "code":"0.6.10",
     "quality":"predominant"
  },
  {
     "name":"diminished",
     "code":"0.3.6",
     "quality":"diminished"
  },
  {
     "name":"diminished-major-seventh",
     "code":"0.3.6.11",
     "quality":"diminished"
  },
  {
     "name":"diminished-seventh",
     "code":"0.3.6.9",
     "quality":"diminished"
  },
  {
     "name":"dominant-eleventh",
     "code":"0.4.7.10.14.17",
     "quality":"major"
  },
  {
     "name":"dominant-minor-ninth",
     "code":"0.4.7.10.13",
     "quality":"major"
  },
  {
     "name":"dominant-ninth",
     "code":"0.4.7.10.14",
     "quality":"major"
  },
  {
     "name":"dominant-seventh",
     "code":"0.4.7.10",
     "quality":"major"
  },
  {
     "name":"dominant-seventh-flat-five",
     "code":"0.4.6.10",
     "quality":"diminished"
  },
  {
     "name":"dominant-seventh-sharp-nine",
     "code":"0.4.7.10.15",
     "quality":"major"
  },
  {
     "name":"dominant-thirteenth",
     "code":"0.4.7.10.14.17.9",
     "quality":"major"
  },
  {
     "name":"dream",
     "code":"0.5.6.7",
     "quality":"just"
  },
  {
     "name":"elektra",
     "code":"0.7.9.13.16",
     "quality":"bitonal"
  },
  {
     "name":"farben",
     "code":"0.8.11.16.21",
     "quality":"atonal"
  },
  {
     "name":"half-diminished-seventh",
     "code":"0.3.6.10",
     "quality":"diminished"
  },
  {
     "name":"harmonic-seventh",
     "code":"0.4.7.10",
     "quality":"major"
  },
  {
     "name":"leading-tone-triad",
     "code":"0.3.6",
     "quality":"diminished"
  },
  {
     "name":"lydian",
     "code":"0.4.7.11.18",
     "quality":"major"
  },
  {
     "name":"magic",
     "code":"0.1.5.6.10.12.15.17",
     "quality":"just"
  },
  {
     "name":"major",
     "code":"0.4.7",
     "quality":"major"
  },
  {
     "name":"major-eleventh",
     "code":"0.4.7.11.14.17",
     "quality":"major"
  },
  {
     "name":"major-seventh",
     "code":"0.4.7.11",
     "quality":"major"
  },
  {
     "name":"major-seventh-sharp-eleventh",
     "code":"0.4.8.11.18",
     "quality":"augmented"
  },
  {
     "name":"major-sixth",
     "code":"0.4.7.9",
     "quality":"major"
  },
  {
     "name":"major-sixth-ninth",
     "code":"0.4.7.9.14",
     "quality":"major"
  },
  {
     "name":"major-ninth",
     "code":"0.4.7.11.14",
     "quality":"major"
  },
  {
     "name":"major-thirteenth",
     "code":"0.4.7.11.14.18.9",
     "quality":"major"
  },
  {
     "name":"minor",
     "code":"0.3.7",
     "quality":"minor"
  },
  {
     "name":"minor-eleventh",
     "code":"0.3.7.10.14.17",
     "quality":"minor"
  },
  {
     "name":"minor-major-seventh",
     "code":"0.3.7.11",
     "quality":"minor"
  },
  {
     "name":"minor-ninth",
     "code":"0.3.7.10.14",
     "quality":"minor"
  },
  {
     "name":"minor-seventh",
     "code":"0.3.7.10",
     "quality":"minor"
  },
  {
     "name":"minor-sixth",
     "code":"0.3.7.9",
     "quality":"minor"
  },
  {
     "name":"minor-sixth-ninth",
     "code":"0.3.7.9.14",
     "quality":"minor"
  },
  {
     "name":"minor-thirteenth",
     "code":"0.3.7.10.14.17.9",
     "quality":"minor"
  },
  {
     "name":"mu",
     "code":"0.2.4.7",
     "quality":"major"
  },
  {
     "name":"mystic",
     "code":"0.6.10.16.21.14",
     "quality":"atonal"
  },
  {
     "name":"neapolitan",
     "code":"1.5.8",
     "quality":"major"
  },
  {
     "name":"ninth-augmented-fifth",
     "code":"0.4.8.10.14",
     "quality":"augmented"
  },
  {
     "name":"ninth-flat-fifth",
     "code":"0.4.6.10.14",
     "quality":"m3+d5"
  },
  {
     "name":"northern-lights",
     "code":"1.2.8.12.15.18.19.22.23.28.31",
     "quality":"atonal"
  },
  {
     "name":"ode-to-napoleon",
     "code":"0.1.4.5.8.9",
     "quality":"atonal"
  },
  {
     "name":"petrushka",
     "code":"0.1.4.6.7.10",
     "quality":"bitonal"
  },
  {
     "name":"power-p5",
     "code":"0.7",
     "quality":"indeterminate"
  },
  {
     "name":"secondary-leading-tone",
     "code":"0.3.6",
     "quality":"diminished"
  },
  {
     "name":"seven-six",
     "code":"0.4.7.9.10",
     "quality":"major"
  },
  {
     "name":"seventh-suspension-four",
     "code":"0.5.7.10",
     "quality":"suspended"
  },
  {
     "name":"so-what",
     "code":"0.5.10.15.19",
     "quality":"bitonal"
  },
  {
     "name":"suspended",
     "code":"0.5.7",
     "quality":"suspended"
  },
  {
     "name":"tristan",
     "code":"0.3.6.10",
     "quality":"predominant"
  },
  {
     "name":"viennese-tri",
     "code":"0.6.7",
     "quality":"atonal"
  }
]

const sortingArr = [
  "C4",
  "C#4",
  "D4",
  "D#4",
  "E4",
  "F4",
  "F#4",
  "G4",
  "G#4",
  "A4",
  "A#4",
  "B4",
  "C5",
  "C#5",
  "D5",
  "D#5",
  "E5",
  "F5",
  "F#5",
  "G5",
  "G#5",
  "A5",
  "A#5",
  "B5",
  "C6",
  "C#6",
  "D6",
  "D#6",
  "E6",
  "F6",
  "F#6",
  "G6",
  "G#6",
  "A6",
  "A#6",
  "B6",
];

const makeChordCode = (...arr) => {
  // takes array of musical notes,
  // e.g. ["C4", "D#4", "G4"]
  // returns semitone intervals (root note included in output)
  //e.g. [4, 7]
  let chord = []
  arr.map((c) => chord.push(sortingArr.indexOf(c)))
  // subtract first note value from all values to get
  // relative pitches (first note will now be zero)
  return chord.map((c) => c - chord[0])
};

const findChordTypes = (str) => {
  // str is the chord code e.g. ".4.7.11"
  // chord is an object e.g. {code: ".5.7", name: "sus4"}
  const chord = chordTypes.find((el) => el.code === str)
  return chord === undefined ? `` : chord.name
}

//
// Add and Remove CSS Classes
// get the DOM element via data-key and use it if not null

const addNote = e => {
  if (document.querySelector(`.key[data-key="${e.keyCode}"]`)) {
    // oneNote is the musical note name e.g. C OR F
    let oneNote = document.querySelector(
      `.key[data-key="${e.keyCode}"] .js-note`
    ).textContent
    if (event.repeat != undefined) {
      allowed = !event.repeat
    }
    if (!allowed) return
    allowed = false
   //  console.log(notesArr)
    if (notesArr.includes(oneNote)) {skippedNote = true}
    if (oneNote && !notesArr.includes(oneNote)) {
      notesArr.push(oneNote)
    }
    // notesArr is sorted here from lower pitch to higher pitch notes
    // join array of numbers with dots and convert to string, now these codes
    // will be in the format found in the chordTypes object
    let theChordCode = makeChordCode(
      ...notesArr.sort((a, b) => sortingArr.indexOf(a) - sortingArr.indexOf(b)))
      .join(".")
      .toString()
   // display root note of chord (remove octave number) with chord name
    if (theChordCode !== ``) {
      result.innerHTML = `
         Chord: ${notesArr[0].replace(/\d/g,"")} ${findChordTypes(theChordCode)}
      `
    }
  }
};

const removeNote = e => {
   if (document.querySelector(`.key[data-key="${e.keyCode}"]`)) {
      let oneNote = document.querySelector(
         `.key[data-key="${e.keyCode}"] .js-note`
      ).textContent
   allowed = true
   // find index of removed note in notesArr, remove from notesArr
   notesArr.splice(notesArr.indexOf(oneNote), 1)
   skippedNote = false
   let theChordCode = makeChordCode(
      ...notesArr.sort((a, b) => sortingArr.indexOf(a) - sortingArr.indexOf(b))
      )
      .join(`.`)
      .toString()
   if (notesArr === undefined || notesArr.length === 0) {
      // if array is empty, or no chord found
      result.innerHTML = `Chord: N/A`
   } else {
      result.innerHTML = `
         Chord: ${notesArr[0].replace(/\d/g,``)} ${findChordTypes(theChordCode)}
         `
      }
   }
}

const removePlaying = e => {
  const keyRemove = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (keyRemove !== null) keyRemove.classList.remove(`playing`)
}

const addPlaying = e => {
  const keyAdd = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (keyAdd !== null) keyAdd.classList.add(`playing`)
}

window.addEventListener("keydown", e => {
  addNote(e)
  addPlaying(e)
})

window.addEventListener("keyup", e => {
  removeNote(e)
  removePlaying(e)
})



// const zero = fn =>  fn ? fn(0) : 0
// const one = fn => fn ? fn(1) : 1
// const two = fn => fn ? fn(2) : 2
// const three = fn => fn ? fn(3) : 3
// const four = fn => fn ? fn(4) : 4
// const five = fn => fn ? fn(5) : 5
// const six = fn => fn ? fn(6) : 6
// const seven = fn => fn ? fn(7) : 7
// const eight = fn => fn ? fn(8) : 8
// const nine = fn => fn ? fn(9) : 9
// const plus = b => (a) => a + b
// const minus = b =>  (a) => a - b
// const times = b => (a) => a * b
// const dividedBy = b => (a) => a / b
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
