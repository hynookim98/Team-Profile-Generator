class Employee {

    // creating a class that all employees will have (name id and email)
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName = () => this.name;
    getId = () => this.id;
    getEmail = () => this.email;
    getRole = () => 'Employee';
}

module.exports = Employee;

const Wesley = new Employee("Wesley", '1', 'wesley@gmail.com');
console.log(Wesley);
//? Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.