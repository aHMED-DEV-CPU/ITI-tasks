let originalArray = ['images/1.gif', 'images/2.gif', 'images/3.gif', 'images/4.gif', 'images/5.gif', 'images/6.gif',
    'images/1.gif', 'images/2.gif', 'images/3.gif', 'images/4.gif', 'images/5.gif', 'images/6.gif'
]
let moonImage = "images/Moon.gif"
let imagesLength = document.images.length
let shuffledArray = []

while (originalArray.length > 0) {
    let randomIndex = Math.floor(Math.random() * originalArray.length);

    // remove from original and add to the shuffled one
    shuffledArray.push(originalArray.splice(randomIndex, 1)[0]);
}

// flag for flipping 
let flipped = []
for (let i = 0; i < document.images.length; i++) {
    flipped[i] = false;
}




let firstIndex = null;
let secondIndex = null;
let lock = false; // freeze 

let matches = 0


function flipping(i) {

    // block clicking if locked or clicking same card
    if (lock || flipped[i]) return;

    // flip image
    document.images[i].src = shuffledArray[i]
    flipped[i] = true

    // first card
    if (firstIndex === null) {
        firstIndex = i
        return;
    }

    // second card
    secondIndex = i
    lock = true

    // check match
    if (shuffledArray[firstIndex] === shuffledArray[secondIndex]) {
        //matched
        matches++
        matches == 6 ? document.getElementById("congrats").innerText = "Congrats you matched the all pictures correctly 👌 !" : null
        resetTurn()
    } else {
        // not match  =>  flip back
        setTimeout(() => {
            document.images[firstIndex].src = moonImage
            document.images[secondIndex].src = moonImage

            flipped[firstIndex] = false
            flipped[secondIndex] = false

            resetTurn();
        }, 800);
    }
}

function resetTurn() {
    firstIndex = null;
    secondIndex = null;
    lock = false;
}



