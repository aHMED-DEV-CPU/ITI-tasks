
/////Parent 

// input btn 
let InputBtn = document.getElementById("InputBtn")
// open child window
function openWindow() {
  let childWindow = open('child.html', "ahmed", "width=700,height=250")
}
// run opening 
InputBtn.onclick = function () {
  openWindow()
}



