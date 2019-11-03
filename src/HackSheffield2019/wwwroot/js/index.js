import { Instrument, Keyboard, Synth, Drums } from "./Instrument.js";
import { SampleLibrary, Sample, fetchSampleLibraries, getSampleLibraries } from "./Sample.js";

// var context = new (window.AudioContext || window.webkitAudioContext);

// var oscillator = context.createOscillator();
// oscillator.type = "sine";
// oscillator.frequency.value = 440;
// oscillator.connect(context.destination);
// oscillator.start();

// var piano = new Tone.Sampler({ "C4": "../../samples/yamahasy35/Synth-Brassica1.wav" }, { release: 1 }).toMaster().start();
// var oscillator = new Tone.Oscillator(440, "sine").toMaster().start();

// var synth = new Synth(
//     new Tone.Sampler(
//         { "C4": "../../samples/yamahasy35/Synth-ElectricPianoHi.wav" }),
//         // () => { synth.triggerAttack("C4"); synth.triggerAttack("E4"); synth.triggerAttack("G4"); }).toMaster(),
//     "Synth", "");

// (async () => {
//     var response = await fetch("https://localhost:44309/api/Instruments");
//     var jsonResponse = await response.json();
//     console.log(jsonResponse);


// })();

var sampleLibraries;

var selectedInstrument;
var selectedSample;

var synth;

fetchSampleLibraries().then(() => {
    sampleLibraries = getSampleLibraries();
    console.log(sampleLibraries);

    selectedInstrument = sampleLibraries[0];
    selectedSample = selectedInstrument[36];

    var instrumentSelection = document.getElementById("instrument-selection");
    var sampleSelection = document.getElementById("sample-selection");

    instrumentSelection.addEventListener("change", event => { onSampleSelection(); });
    sampleSelection.addEventListener("change", event => { onSampleSelection(); });

    for (var i = 0; i < sampleLibraries.length; i++)
        instrumentSelection.options[i] = new Option(sampleLibraries[i].name, sampleLibraries[i].name);
    for (var i = 0; i < selectedInstrument.samples.length; i++)
        sampleSelection.options[i] = new Option(selectedInstrument.samples[i].name, selectedInstrument.samples[i].name);

    onSampleSelection();

    // var synth = new Synth("Synth", "yamahasy35", "Synth-ArtVoice1.wav", 0.2, 5);
    var synth = new Synth("Synth", selectedInstrument.name, selectedSample.fileName, 0.2, 5);

    synth.activate();
    console.log(synth);

    var drums = new Drums("Drumpad", "korgelectribeer1", {
        "C5": "BD-ER1-GoaKick.wav",
        "D5": "BD-ER1-LazerBD1.wav",
        "E5": "SD-ER1-WhipMiami.wav"
    });

    // drums.activate();
    console.log(drums);
});

function onSampleSelection() {
    sampleLibraries = getSampleLibraries();

    var instrumentSelection = document.getElementById("instrument-selection");
    var sampleSelection = document.getElementById("sample-selection");

    // for (var i = 0; i < sampleLibraries.length; i++)
    //     instrumentSelection.options[i] = new Option(sampleLibraries[i].name, sampleLibraries[i].name);
    selectedInstrument = sampleLibraries[instrumentSelection.selectedIndex];

    // for (var i = 0; i < selectedInstrument.samples.length; i++)
    //     sampleSelection.options[i] = new Option(selectedInstrument.samples[i].name, selectedInstrument.samples[i].name);
    selectedSample = selectedInstrument.samples[sampleSelection.selectedIndex];

    console.log(selectedInstrument, selectedSample);

    if (synth) synth.deactivate();
    synth = new Synth("Synth", selectedInstrument.name, selectedSample.fileName, 0.2, 5);
    synth.activate();
}