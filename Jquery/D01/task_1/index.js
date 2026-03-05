

let text = document.getElementById("text")

function setup(groupName, classes) {

    const radios = document.querySelectorAll(`input[name="${groupName}"]`)

    radios.forEach(radio => {

        if (radio.checked) {
            text.classList.add(radio.value)
        }

        radio.addEventListener("change", () => {

            classes.forEach(c => text.classList.remove(c))
            text.classList.add(radio.value)

        })

    })

}

setup("font", ["font-arial", "font-times", "font-verdana", "font-georgia"])
setup("align", ["text-left", "text-center", "text-right", "text-justify"])
setup("line", ["line-normal", "line-15", "line-1_5", "line-2"])
setup("space", ["space-normal", "space-1", "space-2", "space-4"])
setup("transform", ["none-transform", "upper", "lower", "cap"])
setup("dec", ["dec-none", "dec-under", "dec-line", "dec-over"])
setup("indent", ["indent0", "indent20", "indent40"])
setup("size", ["size14", "size18", "size22", "size28"])
setup("weight", ["weight-normal", "weight-bold", "weight-light"])


document.getElementById("reset").onclick = () => {
    location.reload()
}

