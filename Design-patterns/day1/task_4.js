class LightButton {
    render() {
        console.log("Light Button");
    }
}

class LightInput {
    render() {
        console.log("Light Input");
    }
}

class DarkButton {
    render() {
        console.log("Dark Button");
    }
}

class DarkInput {
    render() {
        console.log("Dark Input");
    }
}


class LightFactory {

    createButton() {
        return new LightButton();
    }

    createInput() {
        return new LightInput();
    }

}

class DarkFactory {

    createButton() {
        return new DarkButton();
    }

    createInput() {
        return new DarkInput();
    }

}

const factory = new DarkFactory();

const button = factory.createButton();
const input = factory.createInput();

button.render();
input.render();