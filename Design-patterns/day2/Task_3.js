class TV {

    increaseVolume() {
        console.log("tv volume increased");
    }

    decreaseVolume() {
        console.log("tv volume decreased");
    }

    mute() {
        console.log("tv muted");
    }

}
class Speaker {

    increaseVolume() {
        console.log("speaker volume increased");
    }

    decreaseVolume() {
        console.log("speaker volume decreased");
    }

    mute() {
        console.log("speaker muted");
    }

}

class BasicRemote {

    constructor(device) {
        this.device = device;
    }

    volumeUp() {
        this.device.increaseVolume();
    }

    volumeDown() {
        this.device.decreaseVolume();
    }

}

class AdvancedRemote extends BasicRemote {

    muteDevice() {
        this.device.mute();
    }

}

const tv = new TV();

const basicRemote = new BasicRemote(tv);

basicRemote.volumeUp();
basicRemote.volumeDown();


const speaker = new Speaker();

const advancedRemote = new AdvancedRemote(speaker);

advancedRemote.volumeUp();
advancedRemote.muteDevice();