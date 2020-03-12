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