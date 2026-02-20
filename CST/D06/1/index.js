//1
window.addEventListener("contextmenu", function (e) {
    e.preventDefault()
})

/// 2 


// document.getElementById("submit").addEventListener("submit", function (e) {
//     let confirmation = confirm("Do you want to complete submission ")
//     if (!confirmation) e.preventDefault()

// })


// // 2.2 
// all inputs 
let inputs = document.querySelectorAll("input")

// let typed = false; // flag




// for (let input of inputs) {
//     input.addEventListener("input", () => {
//         typed = true
//     })
// }


// // my event 
// let myEvent = new Event("lookup")
// setTimeout(() => {
//     if (!typed) {
//         document.dispatchEvent(myEvent)
//     }
// }, 2000);


// document.addEventListener("lookup", () => {
//     console.log(" No data entered for 30 seconds!");

//     alert(" No data entered for 30 seconds!")
// })





// // 3.1 explain only


// /// 3.2 detect: the physical key pressed,

// inputs[0].addEventListener("keydown", function (e) {
//     console.log("character printed : " + e.key);
//     console.log("physical key : " + e.code);
// })

// window.addEventListener("keydown", function (e) {
//     if (e.ctrlKey && e.key == "s") {
//         e.preventDefault()
//     }

// })

// //