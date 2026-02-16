//////////////////////////////////////////////1.1
// display the number of letter appearance.


// function letterAppearance() {

//     var userString = prompt("Enter your string")
//     if (userString.length == 0) {
//         console.error("you didn't write a string")
//         return
//     }
//     // entering char and check validation
//     var userChar = prompt("Enter a character to count")
//     var charCheck = /^[a-zA-Z]$/
//     if (!charCheck.test(userChar.trim())) {
//         console.error("your input is wrong ")
//         return
//     }
//     // entering consider and check validation
//     var userConsideration = prompt(" will you consider case sensitive ? answer with (yes / no)")
//     var considerationCheck = /^(yes|no)$/i
//     if (!considerationCheck.test(userConsideration.trim())) {
//         console.error("your input is wrong ")
//         return;
//     }
//     // normalize inputs
//     userConsideration = userConsideration.toLowerCase();
//     ///////////////// consider case sensitive
//     if (userConsideration == "yes") {
//         var arrayOfChar = userString.trim().split("")
//     } else {
//         var arrayOfChar = userString.trim().toLowerCase().split("")
//         userChar = userChar.toLowerCase();
//     }
//     var count = 0
//     for (let i = 0; i < arrayOfChar.length; i++) {
//         if (arrayOfChar[i] == userChar) {
//             count++
//         }

//     }
//     console.log("the count of you letter :" + count);

// }
// letterAppearance()

//////////////////////////////1.2

// function palindromeCheck(params) {
//     var userString = prompt("Enter your string to check if it is palindrome or not ")
//     //check if input empty or not
//     if (userString.length == 0) {
//         console.error("you didn't write a string")
//         return
//     }

//     // entering consider and check validation
//     var userConsideration = prompt(" will you consider case sensitive ? answer with (yes / no)")
//     var considerationCheck = /^(yes|no)$/i
//     if (!considerationCheck.test(userConsideration.trim())) {
//         console.error("your input is wrong ")
//         return;
//     }
//     var userStringArr = userString.trim().split("")
//     //reverse the word
//     var reversedWord = ""
//     for (let i = userStringArr.length - 1; i >= 0; i--) {
//         reversedWord += userStringArr[i]
//     }
//     // user consider
//     userConsideration = userConsideration.toLowerCase();
//     if (userConsideration == "yes") {
//         userString == reversedWord ? console.log("It is a palindrome") : console.log("It is not a palindrome")
//     } else {
//         userString.toLowerCase() == reversedWord.toLowerCase() ? console.log("It is a palindrome") : console.log("It is not a palindrome")
//     }

// }
// palindromeCheck()

//////////////////////////1.3
//returns the largest word


// function getLargestWord(sentence) {
//     var arrOfWords = sentence.trim().split(" ")
//     // var lengthOfWords = arrOfWords.length
//     // make the first word is the largest
//     var theLargestWord = arrOfWords[0]



//     for (let i = 1; i < arrOfWords.length; i++) {
//         if (theLargestWord.length < arrOfWords[i].length) {
//             theLargestWord = arrOfWords[i]

//         }
//     }
//     console.log(theLargestWord);

// }
// getLargestWord("this is a  string javascrept demo javascript")

///////////////////////////////////////////////////////////////1.4

// function validateInfo() {
//     var userName = prompt("please enter your name should be chars ")
//     var nameCheck = /^[A-Z]{3,}$/i
//     while (!userName || !nameCheck.test(userName)) {
//         userName = prompt("Invalid input! Please enter your name using letters only and 3 chars or more :");
//     }
//     /// phone number
//     var userPhoneNumber = prompt("Please enter your phone number (8 digits) ")
//     var PhoneNumberCheck = /^[0-9]{8}$/

//     while (!PhoneNumberCheck.test(userPhoneNumber)) {
//         userPhoneNumber = prompt("Invalid input! Please enter your phone number (8 digits) :");
//     }
//     ///  mobile number
//     var userMobileNumber = prompt("Please enter your Egyptian mobile  number  ")
//     var mobileNumberCheck = /^(010|011|012|015)[0-9]{8}$/

//     while (!mobileNumberCheck.test(userMobileNumber)) {
//         userMobileNumber = prompt("Invalid input! Please enter your Egyptian mobile  number  :");
//     }

//     ///  email
//     var userEmail = prompt("Please enter your email  ")
//     var emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

//     while (!emailCheck.test(userEmail)) {
//         userEmail = prompt("Invalid input! Please enter your email :");
//     }

//     // color:
//     var color = prompt("Please enter your color (red , green , blue )  ")
//     var colorCheck = /^(red|green|blue)$/i

//     while (!colorCheck.test(color)) {
//         color = prompt("Invalid input! Please enter your color (red , green , blue ):");
//     }
//     document.write('<p style="color:' + color.toLowerCase() + '">Name: ' + userName + '</p>');
//     document.write('<p style="color:' + color.toLowerCase() + '">Phone Number: ' + userPhoneNumber + '</p>');
//     document.write('<p style="color:' + color.toLowerCase() + '">Mobile Number: ' + userMobileNumber + '</p>');
//     document.write('<p style="color:' + color.toLowerCase() + '">Email: ' + userEmail + '</p>');




// }
// validateInfo()

//////////////////////////////////////////////////// 2.1
// function mathCalculations() {
//     // area of the circle
//     var radius = prompt("Enter the radius of the circle:");
//     radius = Number(radius);
//     var area = Math.PI * Math.pow(radius, 2);
//     alert("The area of the circle is: " + area.toFixed(2));

//     // 2️ Square root
//     var number = prompt("Enter a number to calculate its square root:");
//     number = Number(number);
//     var sqrtResult = Math.sqrt(number);
//     alert("The square root of " + number + " is: " + sqrtResult.toFixed(2));

//     // 3️ Cosine calculation
//     var angleDegree = prompt("Enter an angle in degrees to calculate its cosine:");
//     angleDegree = Number(angleDegree);

//     // Convert degrees to radians
//     var angleRad = angleDegree * Math.PI / 180;

//     // Calculate cosine
//     var cosValue = Math.cos(angleRad);

//     // Display in console
//     alert("Cos(" + angleDegree + "°) = " + cosValue.toFixed(2));


// }


// mathCalculations();


//
