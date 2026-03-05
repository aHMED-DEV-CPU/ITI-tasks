
const domImage = document.body.firstElementChild.firstElementChild;
const list = document.body.children[1].firstElementChild;
console.log(domImage);



// ================== create ==================
// clone image
const clonedImg = domImage.cloneNode();

// create a footer
const footer = document.createElement("footer");

// append cloned image to footer
footer.appendChild(clonedImg);

footer.classList.add("align-left");


document.body.appendChild(footer);



list.classList.add("circle");