// bring in previous code for Employee.js
const Employee = require("./Employee");
// extend manager class from employee
class Manager extends Employee {
    
    // create a constructor for all properties manager has (employee + officeNumber)
    constructor(name, id, email, officeNumber) {
        // use super to inherit class properties from Employee class
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber = () => this.officeNumber;
    getRole = () => 'Manager';
}

module.exports = Manager;