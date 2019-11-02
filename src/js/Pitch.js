class Pitch {
    constructor(name, frequency) {
        this.name = name;
        this.frequency = frequency;
    }
}

var pitches = [
    
    // Octave 1
    new Pitch("C1", 32.703),
    new Pitch("C#1", 34.648),
    new Pitch("D1", 36.708),
    new Pitch("D#1", 38.891),
    new Pitch("E", 41.203),
    new Pitch("F", 43.654),
    new Pitch("F#1", 46.249),
    new Pitch("G1", 48.999),
    new Pitch("G#1", 51.913),
    new Pitch("A1", 55.000),
    new Pitch("A#1", 58.270),
    new Pitch("B1", 61.735),

    // Octave 2
    new Pitch("C2", 65.406),
    new Pitch("C#2", 69.296),
    new Pitch("D2", 73.416),
    new Pitch("D#2", 77.782),
    new Pitch("E2", 82.407),
    new Pitch("F2", 87.307),
    new Pitch("F#2", 92.499),
    new Pitch("G2", 97.999),
    new Pitch("G#2", 103.83),
    new Pitch("A2", 110.00),
    new Pitch("A#2", 116.54),
    new Pitch("B2", 123.47),

    // Octave 3
    new Pitch("C3", 130.81),
    new Pitch("C#3", 138.59),
    new Pitch("D3", 146.83),
    new Pitch("D#3", 155.56),
    new Pitch("E3", 164.81),
    new Pitch("F3", 174.61),
    new Pitch("F#3", 185.00),
    new Pitch("G3", 196.00),
    new Pitch("G#3", 207.65),
    new Pitch("A3", 220.00),
    new Pitch("A#3", 233.08),
    new Pitch("B3", 246.94),

    // Octave 4
    new Pitch("C4", 261.63),
    new Pitch("C#4", 277.18),
    new Pitch("D4", 293.66),
    new Pitch("D#4", 311.13),
    new Pitch("E4", 329.63),
    new Pitch("F4", 349.23),
    new Pitch("F#4", 369.99),
    new Pitch("G4", 392.00),
    new Pitch("G#4", 415.30),
    new Pitch("A4", 440.00),
    new Pitch("A#4", 466.16),
    new Pitch("B4", 493.88),

    // Octave 5
    new Pitch("C5", 523.25),
    new Pitch("C#5", 554.37),
    new Pitch("D5", 587.33),
    new Pitch("D#5", 622.25),
    new Pitch("E5", 659.26),
    new Pitch("F5", 698.46),
    new Pitch("F#5", 739.99),
    new Pitch("G5", 783.99),
    new Pitch("G#5", 830.61),
    new Pitch("A5", 880.00),
    new Pitch("A#5", 932.33),
    new Pitch("B5", 987.77),

    // Octave 6
    new Pitch("C6", 1046.5),
    new Pitch("C#6", 1108.7),
    new Pitch("D6", 1174.7),
    new Pitch("D#6", 1244.5),
    new Pitch("E6", 1318.5),
    new Pitch("F6", 1396.9),
    new Pitch("F#6", 1480.0),
    new Pitch("G6", 1568.0),
    new Pitch("G#6", 1661.2),
    new Pitch("A6", 1760.0),
    new Pitch("A#6", 1864.7),
    new Pitch("B6", 1975.5)

]

function getPitch(name) {
    console.log(name);
    return pitches.find(pitch => pitch.name == name);
}

export { Pitch, getPitch };