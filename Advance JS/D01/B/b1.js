// 1st way 
function reverseParams1(...args) {
    return args.reverse()
}
console.log(reverseParams1(1, 2, 3, 4))


// 2nd Way 

function reverseParams2() {
    return Array.from(arguments).reverse()
}

console.log(reverseParams2(5, 6, 7, 8))
