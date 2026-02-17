// flag to freeze or keep going
let move = true
// moving 
let marbleTurn = 0
// the different marble
let changedMarble = 'images/marble3.jpg'
let originalMarble = 'images/marble1.jpg'
// the start 
document.images[0].src = changedMarble
let imagesLength = document.images.length

let initialSpeed = 1000
// show speed at screen 
let showSpeed = document.getElementById("Speed_result")
showSpeed.innerText = initialSpeed / 1000

//speed control
//update speed
function startInterval() {
    clearInterval(timeInterval);
    timeInterval = setInterval(moving, initialSpeed); // start with a new speed
}

function Increase() {
    if (initialSpeed > 200) {
        initialSpeed -= 200;
        showSpeed.innerText = initialSpeed / 1000;
        startInterval(); // APPLY new speed
    }
}
function decrease() {
    if (initialSpeed < 2000) {
        initialSpeed += 200;
        showSpeed.innerText = initialSpeed / 1000;
        startInterval();
    }
}

// moving function 
function moving() {
    if (!move) return;
    ++marbleTurn
    if (marbleTurn >= imagesLength) {
        marbleTurn = 0
    }
    for (let i = 0; i < imagesLength; i++) {
        document.images[i].src = (marbleTurn == i) ? changedMarble : originalMarble;


    }


}
let timeInterval = setInterval(moving, initialSpeed)


function keepMoving() {

    move = true;

}


function freeze() {
    move = false

}


