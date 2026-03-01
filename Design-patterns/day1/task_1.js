// singleton
// Create a counter that will track  the number of active instances 

class Box {

    static instance = null;
    static count = 1

    constructor() {

        if (Box.instance) {
            Box.count++
            return Box.instance;
        }

        this.connection = "Connected";

        Box.instance = this;
    }
    getCount() {
        return Box.count
    }
}



let box1 = new Box("box1");


let box2 = new Box("box2");

console.log(box1 == box2);

let box3 = new Box("box3");

console.log(box3.getCount());

