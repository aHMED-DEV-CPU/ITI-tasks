// selectors
const leftImg = document.querySelector("#left-img")
const rightImg = document.querySelector("#right-img")
const bottomImg = document.querySelector("#bottom-img")

const startBtn = document.querySelector("#start-btn")
const stopBtn = document.querySelector("#stop-btn")
const resetBtn = document.querySelector("#reset-btn")

const box = document.querySelector("#pics")

const images = [
    { el: leftImg, dir: "left", pos: 10, interval: null },
    { el: rightImg, dir: "right", pos: 10, interval: null },
    { el: bottomImg, dir: "bottom", pos: 10, interval: null }
]

stopBtn.disabled = true


// START
startBtn.addEventListener("click", () => {

    images.forEach((img) => {

        let direction = 1

        img.interval = setInterval(() => {

            let limit =
                img.dir === "bottom" ? box.clientHeight : box.clientWidth

            if (img.pos + 60 >= limit - 10 || img.pos < 10) {
                direction *= -1
            }

            img.pos += 10 * direction
            img.el.style[img.dir] = img.pos + "px"

        }, 50)

    })

    startBtn.disabled = true
    stopBtn.disabled = false
})


// STOP
stopBtn.addEventListener("click", () => {

    images.forEach(img => clearInterval(img.interval))

    stopBtn.disabled = true
    startBtn.disabled = false
    startBtn.innerText = "Go Again"

})


// RESET
resetBtn.addEventListener("click", () => {

    images.forEach(img => {
        clearInterval(img.interval)
        img.pos = 10
        img.el.style[img.dir] = "10px"
    })

    startBtn.disabled = false
    stopBtn.disabled = true
    startBtn.innerText = "Start"

})