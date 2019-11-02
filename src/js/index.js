import { Pitch, getPitch } from "./Pitch.js";

var context = new (window.AudioContext || window.webkitAudioContext);

var oscillator = context.createOscillator();
oscillator.type = "sine";
oscillator.frequency.value = 440;
oscillator.connect(context.destination);
oscillator.start();

window.addEventListener("keydown", event => {
    if (event.defaultPrevented) return;

    var pitch =
        // 4th octave
          event.key === "z" ? getPitch("C4")
        : event.key === "s" ? getPitch("C#4")
        : event.key === "x" ? getPitch("D4")
        : event.key === "d" ? getPitch("D#4")
        : event.key === "c" ? getPitch("E4")
        : event.key === "v" ? getPitch("F4")
        : event.key === "g" ? getPitch("F#4")
        : event.key === "b" ? getPitch("G4")
        : event.key === "h" ? getPitch("G#4")
        : event.key === "n" ? getPitch("A4")
        : event.key === "j" ? getPitch("A#4")
        : event.key === "m" ? getPitch("B4")
        // 5th octave - lower region
        : event.key === "," ? getPitch("C5")
        : event.key === "l" ? getPitch("C#5")
        : event.key === "." ? getPitch("D5")
        : event.key === ";" ? getPitch("D#5")
        : event.key === "/" ? getPitch("E5")
        // 5th octave
        : event.key === "q" ? getPitch("C5")
        : event.key === "2" ? getPitch("C#5")
        : event.key === "w" ? getPitch("D5")
        : event.key === "3" ? getPitch("D#5")
        : event.key === "e" ? getPitch("E5")
        : event.key === "r" ? getPitch("F5")
        : event.key === "5" ? getPitch("F#5")
        : event.key === "t" ? getPitch("G5")
        : event.key === "6" ? getPitch("G#5")
        : event.key === "y" ? getPitch("A5")
        : event.key === "7" ? getPitch("A#5")
        : event.key === "u" ? getPitch("H5")
        // 6th octave - lower region
        : event.key === "i" ? getPitch("C6")
        : event.key === "9" ? getPitch("C#6")
        : event.key === "o" ? getPitch("D6")
        : event.key === "0" ? getPitch("D#6")
        : event.key === "p" ? getPitch("E")
        // Default
        : null;
    
    console.log(pitch);
    oscillator.frequency.value = pitch.frequency;
});