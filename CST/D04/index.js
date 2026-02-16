///////////////////////////////////1.1
//sort the array’s values in descending and ascending orders Display the output in the console.
// A negative value indicates that a should come before b
// positive value indicates that a should come after b.



// function sorting() {
//     let length = Number(prompt("Enter the length of the array"));

//     while (isNaN(length) || length <= 0) {
//         length = Number(prompt("Please enter a valid number for array length"));
//     }

//     let arr = [];

//     for (let i = 0; i < length; i++) {
//         arr[i] = Number(prompt("Enter number " + (i + 1)));

//         while (isNaN(arr[i])) {
//             arr[i] = Number(prompt("Please enter a valid number for element " + (i + 1)));
//         }
//     }
//     console.log("Ascending order : " + arr.sort((a, b) => a - b));
//     console.log("descending  order : " + arr.sort((a, b) => b - a));
// }
// sorting()


//////////////////////////////////////1.2 // null propagation operator
// let street = prompt("Enter your street ");
// while (street?.length == 0) {
//     street = prompt("Empty input ! Enter your street ");
// }
// let buildingNum = prompt(" Enter your building Number")
// while (buildingNum?.length == 0) {
//     buildingNum = prompt(" Empty input ! Enter your  building Number ");
// }
// let city = prompt(" Enter your  city ")
// while (city?.length == 0) {
//     city = prompt(" Empty input ! Enter your  city ");
// }
// let userAddress = {
//     street,
//     buildingNum,
//     city
// }
// function showAddress(userAddress) {

//     let now = new Date()
//     let theCurrentDate = now.toLocaleDateString()
//     console.log(userAddress.buildingNum + " " + userAddress.street + " , " + userAddress.city + " city registered in " + theCurrentDate);


// }

// showAddress(userAddress)

// //////////////////////////////////////////////1.2.2.

// function dispVal(obj, key) {
//     console.log(obj[key] + " years old");
// }
// let ourObj = { nm: "”ali”", age: 10 }

// dispVal(ourObj, "age")


//////// 2.1. Window Object


// let timeInterval

// function moveChildWindow() {
//     let childOpen = open('child.html', "ahmed", 'width=250,height=250 resize = none');

//     let x_axis = 10;
//     let y_axis = 10;

//     let direction = 1;

//     timeInterval = setInterval(function () {

//         childOpen.moveBy(x_axis * direction, y_axis * direction);


//         let y = childOpen.screenY; // position for child at y-axis
//         let childHeight = childOpen.outerHeight;// hight of child
//         let screenHeight = screen.availHeight;
//         // prevent resizing
//         childOpen.resizeTo(250, 250);

//         // console.log(y);

//         // bottom reached
//         if (y + childHeight >= screenHeight) { //
//             direction = -1;
//         }

//         // top reached  =>  go down
//         if (y <= 0) {
//             direction = 1;
//         }

//     }, 10);
// }


// function stopChildWindow() {
//     clearInterval(timeInterval)
// }

// ////////////////////////////////////////////set time out

// function moveChildWindow() {
//     let childOpen = open('child.html', "ahmed", 'width=250,height=250 resize = none');

//     let x_axis = 10;
//     let y_axis = 10;

//     let direction = 1;

//     function moving() {

//         childOpen.moveBy(x_axis * direction, y_axis * direction);


//         let y = childOpen.screenY; // position for child at y-axis
//         let childHeight = childOpen.outerHeight;// hight of child
//         let screenHeight = screen.availHeight;
//         // prevent resizing
//         childOpen.resizeTo(250, 250);

//         // console.log(y);

//         // bottom reached
//         if (y + childHeight >= screenHeight) { //
//             direction = -1;
//         }

//         // top reached  =>  go down
//         if (y <= 0) {
//             direction = 1;
//         }

//         timeInterval = setTimeout(moving, 10)
//     }

//     moving()

// }


// function stopChildWindow() {
//     clearTimeout(timeInterval)
// }


//////////////////////////////2.2
// function scrollChildWindow() {
//     let childOpen = open('scrolledChild.html', "ahmed", 'width=250,height=250 ');
//     setInterval(function () {
//         childOpen.scrollBy({
//             top: 10,
//             behavior: "smooth",
//         })
//     }, 10)


// }

let childOpen
function scrollChildWindow() {
    childOpen = open('scrolledChild.html', "ahmed", 'width=250,height=250 ');

    scrolling()

}

function scrolling() {
    childOpen.scrollBy({
        top: 10,
        behavior: "smooth",
    })
    setTimeout(scrolling, 10)
}