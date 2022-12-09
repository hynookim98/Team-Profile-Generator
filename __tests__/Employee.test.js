// require Employee.js
const Employee = require("../lib/Employee");

// ******************** Test for object and constructor arguments ********************
// test to see if new Employee created is an object
test("Program is able to initiate new Employee", () => {
    const x = new Employee();
    expect(typeof(x)).toBe("object");
});

test("Program is able to let user set employee's name via constructor arguments", () => {
    // manually setting employee name to test
    const tst = "Matthew";
    // setting employee name via constructor argument
    const x = new Employee(tst);
    expect(x.name).toBe(tst);
});

test("Is able to set employee's id via using constructor arguments", () => {
    // manually setting employee's id
    const tst = 10;
    const x = new Employee("Test Name", tst);
    // checking to see if it matches with constructor arguments x.id
    expect(x.id).toBe(tst);
});

test("Is able to set employee's email via using constructor arguments", () => {
    // manually setting employee's email
    const tst = "test@gmail.com";
    const x = new Employee("Test Name", 10, tst);
    // checking with constructor arguments
    expect(x.email).toBe(tst);
});

// ******************** Test for Class Methods ********************
test("Employee getName() method functions", () => {
    // manually setting employee's name
    const tst = "Matthew";
    const x = new Employee(tst);
    // testing against method
    expect(x.getName()).toBe(tst);
});

test("Employee getId() method functions", () => {
    // manually setting employee's id
    const tst = 10;
    const x = new Employee("Test Name", tst);
    // testing against method
    expect(x.getId()).toBe(tst);
});

test("Employee getEmail() method functions", () => {
    // manually setting employee's emial
    const tst = "test@gmail.com";
    const x = new Employee("Test Name", 10, tst);
    // testing against method
    expect(x.getEmail()).toBe(tst);
});

test ("Employee getRole() method functions", () => {
    // manually setting Employee role
    const tst = 'Employee';
    const x = new Employee("Test Name", 10, "test@gmail.com");
    // testing against method
    expect(x.getRole()).toBe(tst);
});