//1
console.log("=== First problem ===");

function courseInfo(obj = {}) {
    let wantedArguments = ["courseName", "courseDuration", "courseOwner"]

    // check entered inputs
    for (const entered of Object.keys(obj)) {
        if (!wantedArguments.includes(entered)) {
            throw new Error("The entry that you entered is not allowed ");
        }
    }
    // default params
    let {
        courseName = "ES6",
        courseDuration = "3 days",
        courseOwner = "JavaScript"
    } = obj;

    return `My course name : ${courseName} , courseDuration : ${courseDuration}
     and course owner : ${courseOwner}`
}
console.log(courseInfo({ courseDuration: "45days", courseName: "js", courseOwner: "Gaber" }));

//2
console.log("=== second problem ===");

function* generator(n) {
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}
for (let number of generator(7)) {
    console.log(number);


}
console.log("=== second problem === part 2");
function* maxGenerator(maxValue) {
    let a = 0;
    let b = 1;
    while (a <= maxValue) {
        yield a;
        [a, b] = [b, a + b];
    }


}
for (let number of maxGenerator(16)) {
    console.log(number);
}
//3
console.log("=== third problem ===");

let truncate15 = {
    [Symbol.replace](str) {
        if (str.length > 15) {
            return str.slice(0, 15)
        }
        return str;
    }
};


let longText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat modi a ducimus laboriosam. Aperiam quis ";
let shortText = "Short string";

console.log(longText.replace(truncate15));


console.log(shortText.replace(truncate15));


//4
console.log("=== fourth problem ===");
const person = {
    name: "Ali",
    age: 25,
    job: "Developer",


    [Symbol.iterator]() {
        const entries = Object.entries(this)
        let index = 0

        // return Iterator
        return {
            next() {
                if (index < entries.length) {
                    const [key, value] = entries[index]
                    index++
                    return { value: { key, value }, done: false }
                } else {
                    return { done: true }
                }
            }
        }
    }
}


for (const prop of person) {
    console.log(`${prop.key}: ${prop.value}`)
}
