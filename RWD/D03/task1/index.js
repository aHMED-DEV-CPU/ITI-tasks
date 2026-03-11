let darkModeBtn = document.getElementById("changeMode")
let toggler = document.getElementById("toggler")
let html = document.querySelector('html')
var theme = true;
darkModeBtn.addEventListener("click", () => {
    if (theme) {
        html.setAttribute('data-bs-theme', 'dark')
        theme = false
        toggler.classList.replace("bg-white", 'bg-dark')
    }
    else {
        html.setAttribute('data-bs-theme', 'light')
        theme = true
        toggler.classList.replace('bg-dark', 'bg-white')
    }

})