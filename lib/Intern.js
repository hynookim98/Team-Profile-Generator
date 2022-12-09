// bring in Employee Class
const Employee = require('./Employee');
// Intern extends Employee Class
class Intern extends Employee {

    // create a constructor for all properties intern has (employee + school)
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school=school;
    }

    getSchool = () => this.school;
    getRole = () => 'Intern';
}

module.exports = Intern;