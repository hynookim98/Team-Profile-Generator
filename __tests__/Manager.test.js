// require Manager.js
const Manager = require("../lib/Manager");

// ******************** Test for constructor arguments ********************
test("Is able to set Manager's office number via constructor arguments", () => {
    // manually setting manager's office number
    const tst = 100;
    const x = new Manager("Test", 10, "test@gmail.com", tst);
    // checking against constructor argument
    expect(x.officeNumber).toBe(tst);
});

// ******************** Test for Class Methods ********************
test("Manager getRole() method functions", () => {
    // manually setting manager role to manager
    const tst = "Manager";
    const x = new Manager("Test", 10, "test@gmail.com", 100);
    // checking against method
    expect(x.getRole()).toBe(tst);
});

test("Manager getOfficeNumber() method functions", () => {
    // manually setting manager office number
    const tst = 100;
    const x = new Manager("Test", 10, "test@gmail.com", 100);
    // checking against method
    expect(x.getOfficeNumber()).toBe(tst);
});