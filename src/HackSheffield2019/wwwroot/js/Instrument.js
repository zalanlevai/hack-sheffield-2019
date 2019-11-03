import { Pitch, getPitch } from "./Pitch.js";

class Instrument {
    constructor(instrument, type) {
        this.instrument = instrument;
        this.instrument.toMaster();
        this.type = type;
        this.active = false;
    }

    activate() {
        this.active = true;
        window.addEventListener("keydown", this.onKeyDown);
        window.addEventListener("keyup", this.onKeyUp);
    }
    deactivate() {
        this.active = false;
        window.removeEventListener("keydown", this.onKeyDown);
        window.removeEventListener("keyup", this.onKeyUp);
    }
}

class Keyboard extends Instrument {
    constructor(instrument, type) {
        super(instrument, type);

        this.pressedKeys = [];

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.transformKeyToPitch = this.transformKeyToPitch.bind(this);
    }

    transformKeyToPitch(key) {
        var pitch =
            // 4th octave
              key === "z" ? getPitch("C4")
            : key === "s" ? getPitch("C#4")
            : key === "x" ? getPitch("D4")
            : key === "d" ? getPitch("D#4")
            : key === "c" ? getPitch("E4")
            : key === "v" ? getPitch("F4")
            : key === "g" ? getPitch("F#4")
            : key === "b" ? getPitch("G4")
            : key === "h" ? getPitch("G#4")
            : key === "n" ? getPitch("A4")
            : key === "j" ? getPitch("A#4")
            : key === "m" ? getPitch("B4")
            // 5th octave - lower region
            : key === "," ? getPitch("C5")
            : key === "l" ? getPitch("C#5")
            : key === "." ? getPitch("D5")
            : key === ";" ? getPitch("D#5")
            : key === "/" ? getPitch("E5")
            // 5th octave
            : key === "q" ? getPitch("C5")
            : key === "2" ? getPitch("C#5")
            : key === "w" ? getPitch("D5")
            : key === "3" ? getPitch("D#5")
            : key === "e" ? getPitch("E5")
            : key === "r" ? getPitch("F5")
            : key === "5" ? getPitch("F#5")
            : key === "t" ? getPitch("G5")
            : key === "6" ? getPitch("G#5")
            : key === "y" ? getPitch("A5")
            : key === "7" ? getPitch("A#5")
            : key === "u" ? getPitch("B5")
            // 6th octave - lower region
            : key === "i" ? getPitch("C6")
            : key === "9" ? getPitch("C#6")
            : key === "o" ? getPitch("D6")
            : key === "0" ? getPitch("D#6")
            : key === "p" ? getPitch("E6")
            // Default
            : null;
        
        console.log(pitch);
        return pitch;
    }
}

class Synth extends Keyboard {
    constructor(type, instrument, soundbank, attack = 0, release = 0.1) {
        super(new Tone.Sampler({ "C4": soundbank }, null, `../../samples/${instrument}/`), type, soundbank);

        this.instrument.attack = attack;
        this.instrument.release = release;

        this.soundbank = soundbank;

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    onKeyDown(event) {
        if (!this.instrument.loaded) return;

        if (this.pressedKeys.includes(event.key)) return;
        this.pressedKeys.push(event.key);

        this.instrument.triggerAttack(this.transformKeyToPitch(event.key).name);
    }
    onKeyUp(event) {
        if (!this.instrument.loaded) return;

        var i = this.pressedKeys.indexOf(event.key);
        if (i > -1) this.pressedKeys.splice(i, 1);

        this.instrument.triggerRelease(this.transformKeyToPitch(event.key).name);
    }
}

class Drums extends Keyboard {
    constructor(type, instrument, samples) {
        super(new Tone.Sampler(samples, null, `../../samples/${instrument}/`), type);

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    onKeyDown(event) {
        if (!this.instrument.loaded) return;

        if (this.pressedKeys.includes(event.key)) return;
        this.pressedKeys.push(event.key);

        this.instrument.triggerAttack(this.transformKeyToPitch(event.key).name);
    }
    onKeyUp(event) {
        if (!this.instrument.loaded) return;

        var i = this.pressedKeys.indexOf(event.key);
        if (i > -1) this.pressedKeys.splice(i, 1);
    }
}

export { Instrument, Keyboard, Synth, Drums };