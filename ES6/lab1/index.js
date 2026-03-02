//1

var x = 10;
var y = 20;
console.log("Before swap: ", x, y);
[y, x] = [x, y];

console.log("After swap: ", x, y);


//2

function minMax(...numbers) {


    let maxNumber = Math.max(...numbers)
    let minNumber = Math.min(...numbers)
    return { maxNumber, minNumber }
}

let arr2 = [2, 8, 6, 55, 20, 3, 62, 55]
const result = minMax(...arr2);

console.log("Max number =", result.maxNumber);
console.log("Min number =", result.minNumber);

//3

var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

//a. test that every element in the given array is a string
fruits.every((fruit) => typeof fruit == "string") ? console.log("All elements are string") :
    console.log("Not all Elements are string ")

//b. test that some of array elements starts with "a"
fruits.some((fruit) => fruit.startsWith('a')) ? console.log("some of array elements starts with 'a'") :
    console.log("No array elements starts with 'a' ")
//c. generate new array filtered from the given array with only elements that starts with "b" or "s"
let filteredArr = fruits.filter((filter) => (filter.startsWith('b') || filter.startsWith('s')))
console.log(`elements that starts with "b" or "s" ${filteredArr}`);
//d. generate new array, each element of the new array contains a string declaring that you like the give fruit element
let mapArr = fruits.map((fruit) => `I like ${fruit}`)
console.log(mapArr);
// e.use forEach to display all elements of the new array from previous point
mapArr.forEach((fruit) => console.log(fruit)
)
