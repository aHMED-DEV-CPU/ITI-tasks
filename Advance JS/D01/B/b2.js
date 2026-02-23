const myObject = {
    description: "Generator for getters and setters",

    getSetGen: function () {
        for (let key in this) {

            // check is a function?
            if (typeof this[key] !== "function") {

                //Capitalize first char 
                let capitalized =
                    key.charAt(0).toUpperCase() + key.slice(1)

                //  Getter
                this["get" + capitalized] = function () {
                    return this[key]
                }

                //  Setter
                this["set" + capitalized] = function (value) {
                    this[key] = value
                }
            }
        }
    }
}

let obj = {
    id: "12",
    name: "Gaber",
    addr: "sidi besher",
    getSetGen: myObject.getSetGen
}

obj.getSetGen()

console.log(obj.getId())
obj.setId("22")
console.log(obj.getId())

console.log(obj.getAddr())  
