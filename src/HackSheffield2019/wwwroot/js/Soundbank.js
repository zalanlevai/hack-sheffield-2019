class Soundbank {
    constructor(name, displayName = name) {
        this.name = name;
        this.displayName = displayName;

        this.samples = [];
    }
}

class Sample {
    constructor(soundbank, name) {
        this.soundbank = soundbank;
        this.name = name;
    }
}

var soundbanks = [];