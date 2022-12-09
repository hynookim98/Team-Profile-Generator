// bring in Employee Class 
const Employee = require('./Employee');
// extend engineer class from Employee
class Engineer extends Employee {

    // create a constructor for all properties engineer has (employee + github)
    constructor(name, id, email, github) {
        // use super to inherit class properties from Employee
        super(name, id, email);
        this.github = github;
    }

    getGithub = () => this.github;
    getRole = () => 'Engineer';
}

module.exports = Engineer;