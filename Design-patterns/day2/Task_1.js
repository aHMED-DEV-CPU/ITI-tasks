class Teacher {

    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    info() {
        console.log(
            `${this.name} teaches ${this.subject}`
        );
    }

}

function addSalary(teacher, salary) {

    teacher.salary = salary;

    return teacher;
}
function addNationality(teacher, nationality) {

    teacher.nationality = nationality;

    return teacher;
}
function addStreet(teacher, street) {

    teacher.street = street;

    return teacher;
}


const teacher1 = new Teacher(
    "gaber",
    "math"
);

teacher1.info();

addSalary(teacher1, 15000);

addNationality(teacher1, "Egyptian");

addStreet(teacher1, "Alexandria, Sidi beshr");

console.log(teacher1);