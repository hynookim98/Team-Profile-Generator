// require Intern.js
const Intern = require("../lib/Intern");

// ******************** Test for constructor arguments ********************
test("is able to set intern's school via constructor argument", () => {
    // manually setting intern's school
    const tst = "UCI";
    const x = new Intern("Test", 10, "test@gmail.com", tst);
    // checking against constructor argument
    expect(x.school).toBe(tst);
});

// ******************** Test for Class Methods ********************
test("Intern getRole() method functions", () => {
    // manually setting intern's role to intern
    const tst = "Intern";
    const x = new Intern("Test", 10, "test@gmail.com", "UCI");
    // checking against method
    expect(x.getRole()).toBe(tst);
});

test("Intern getSchool() method functions", () => {
    // manually setting intern's school
    const tst = "UCI";
    const x = new Intern("Test", 10, "test@gmail.com", tst);
    // checking against method
    expect(x.getSchool()).toBe(tst);
});