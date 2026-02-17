let UrlSubmitted = location.search.slice(1).split("&")


// male or female 
console.log(UrlSubmitted[3].split("=")[1]);

let genderImage = document.images[0] // i have only a one image 


// put image if male or female 
UrlSubmitted[3].split("=")[1] == "Male" ? genderImage.src = "https://avatar.iran.liara.run/public/boy"
    : genderImage.src = "https://avatar.iran.liara.run/public/girl"


    
    
// fill data 
for (let i = 0; i < UrlSubmitted.length; i++) {
    let singleInput = UrlSubmitted[i].split("=") // name  , ahmed
    document.getElementById(singleInput[0]).innerHTML = singleInput[1].replaceAll("+", " ").replace("%40", "@")
}


// browser used 
const ua = navigator.userAgent;
const isChrome = ua.includes("Chrome") && !ua.includes("Edg") && !ua.includes("OPR");


let warnParagraph = document.getElementById("chrome")
if (!isChrome) {
    warnParagraph.innerText = "Your are not using chrome ! We recommend you to use Chrome"
} 
