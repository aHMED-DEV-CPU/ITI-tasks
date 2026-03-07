console.log("===========problem No.2==============");
// task 2
let obj = {
    name: "Ahmed",
    address: "xyz...",
    age: 22
}

let handler = {
    set(target, prop, value) {

        if (!target.hasOwnProperty(prop)) {
            throw new Error("Undefined property")
        }

        switch (prop) {

            case "name":
                if (typeof value === "string" && value.length === 7) {
                    target[prop] = value
                } else {
                    throw new Error("Name accepts only string of 7 characters")
                }
                break

            case "address":
                if (typeof value === "string") {
                    target[prop] = value
                } else {
                    throw new Error("Address accepts only string value")
                }
                break

            case "age":
                if (typeof value === "number" && value >= 25 && value <= 60) {
                    target[prop] = value
                } else {
                    throw new Error("Age must accept numerical value between 25 and 60")
                }
                break
        }

        return true
    },

    get(target, prop) {
        if (target.hasOwnProperty(prop)) {
            return target[prop]
        } else {
            throw new Error("Undefined property")
        }
    }
}
let myProxy = new Proxy(obj, handler)


myProxy.name = "ahmedaa"
console.log(myProxy.name)
myProxy.age = 30
console.log(myProxy.age)
myProxy.address = "abc...street"
console.log(myProxy.address)

