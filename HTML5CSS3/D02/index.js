let text = document.getElementById("text")
let redRange = document.getElementById("red")
let greenRange = document.getElementById("green")
let blueRange = document.getElementById("blue")

function updateColor() {
    let red = redRange.value
    let green = greenRange.value
    let blue = blueRange.value
    text.style.color = `rgb(${red} , ${green} , ${blue})`
}
redRange.addEventListener("input", updateColor)
greenRange.addEventListener("input", updateColor)
blueRange.addEventListener("input", updateColor)

