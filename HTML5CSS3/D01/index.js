let video = document.getElementById("video")
let progress = document.getElementById("progress")
let volume = document.getElementById("volume")
let volValue = document.getElementById("volText")
//BTns
let playBtn = document.getElementById("play")
let stopBtn = document.getElementById("stop")
let skippingBtns = document.querySelectorAll(".skipping button ")
let muteBtn = document.getElementById("mute")
let speedBtn = document.getElementById("speed")
//display time
let currentTimeTag = document.getElementById("currentTime")
let totalTimeTag = document.getElementById("TotalTime")

// display Time
function formatTime(time) {
    const min = Math.floor(time / 60)
    const sec = Math.floor(time % 60).toString().padStart(2, '0')
    return `${min}:${sec}`
}

video.addEventListener("loadedmetadata", () => {
    totalTimeTag.innerHTML = formatTime(video.duration)
})
// while video is playing 
video.addEventListener("timeupdate", () => {
    let value = (video.currentTime / video.duration) * 100
    progress.value = value
    currentTimeTag.innerHTML = formatTime(video.currentTime)
})

// when change the time by user 


progress.addEventListener("input", () => {
    let time = (progress.value / 100) * video.duration
    video.currentTime = time
})


// play the video 

playBtn.addEventListener("click", () => {
    video.play()
})
stopBtn.addEventListener("click", () => {
    video.pause()
})

// skipping time
skippingBtns[3].addEventListener("click", () => {
    video.currentTime += 7
})
skippingBtns[2].addEventListener("click", () => {
    video.currentTime += 3
})
skippingBtns[1].addEventListener("click", () => {
    video.currentTime -= 3
})
skippingBtns[0].addEventListener("click", () => {
    video.currentTime -= 7
})

//volume 
let lastVolume = volume.value
volume.addEventListener("input", () => {
    let value = volume.value / 100
    video.volume = value
    volValue.textContent = volume.value + "%"
    lastVolume = volume.value
    if (video.muted && value > 0) {
        video.muted = false
    }
})
muteBtn.addEventListener("click", () => {
    video.muted = !video.muted
    if (video.muted) {
        volValue.textContent = 0
        video.volume = 0
        volume.value = 0
    } else {
        video.volume = lastVolume / 100
        volume.value = lastVolume
        volValue.textContent = lastVolume + "%"
    }

})
// increase speed 
speedBtn.addEventListener("input", () => {

    video.playbackRate = speedBtn.value
    document.getElementById("speedTxt").innerHTML = speedBtn.value
})