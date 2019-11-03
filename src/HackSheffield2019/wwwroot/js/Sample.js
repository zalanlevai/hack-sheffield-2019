class SampleLibrary {
    constructor(name, samples) {
        this.name = name;
        this.samples = samples;
    }
}

class Sample {
    constructor(name, fileName) {
        this.name = name;
        this.fileName = fileName;
    }
}

var sampleLibraries = [];

async function fetchSampleLibraries() {
    var response = await fetch("api/Instruments");
    var jsonResponse = await response.json();

    sampleLibraries = jsonResponse;
}
function getSampleLibraries() {
    return sampleLibraries;
}

export { SampleLibrary, Sample, fetchSampleLibraries, getSampleLibraries };