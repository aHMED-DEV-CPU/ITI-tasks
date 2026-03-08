// get data of the API  // task 3
async function getData() {
    let result = await fetch("https://jsonplaceholder.typicode.com/users")
    return result.json()
}

let table = document.createElement("table")

// Display data 
getData().then(data => {
    console.log(data);

    table.innerHTML = `
        <thead>
            <tr>
        ${Object.keys(data[0]).map(key => `<th>${key}</th>`).join("")}
            </tr>
            
        </thead>
        <tbody>

        ${data.map((user) => (`<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address.street}</td>
            <td>${user.phone}</td>
            <td>${user.website}</td>
            <td>${user.company.name}</td>
            
            </tr>`)).join("")}
</tbody>
    `
    document.body.appendChild(table);
})

// task 4


//=========== Reflect API ==========
// It is a group of functions that deals wih objects instead of dealing with it in a direct way 


let obj = {
    name: "Ahmed",
    age: 22,
    major: "BIS"
}
///=================Examples===============

console.log(Reflect.get(obj, "name"));// Ahmed
// set
Reflect.set(obj, "name", "Ali");
console.log(Reflect.get(obj, "name"));// Ali

// has
console.log(Reflect.has(obj, "name")); // true

// delete
Reflect.deleteProperty(obj, "name")
console.log(Reflect.get(obj, "name")); // undefined

//ownKeys
console.log(Reflect.ownKeys(obj)); // ["age" , "major"]

