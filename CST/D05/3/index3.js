let images = ['images/1.jpg', "images/2.jpg",
    "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"]
document.images[0].src = images[0]


// next BTN
let imageTurn = 0


// flag to make it circular or not 
let makeCircular = false

function slidShow() {
    makeCircular = true
}
function stop() {
    makeCircular = false
}


function next() {
    ++imageTurn
    if (imageTurn >= images.length && makeCircular == false) {
        imageTurn = images.length - 1
    } else if (imageTurn >= images.length && makeCircular) {
        imageTurn = 0
    }
    setTimeout(function () {
        document.images[0].src = images[imageTurn]
    }, 100)

    console.log(imageTurn);
}
// previous BTN
function previous() {
    --imageTurn
    if (imageTurn < 0 && makeCircular == false) {
        imageTurn = 0
    } else if (imageTurn < 0 && makeCircular) {
        imageTurn = images.length - 1
    }
    setTimeout(function () {
        document.images[0].src = images[imageTurn]
    }, 100)
    console.log(imageTurn);
}
