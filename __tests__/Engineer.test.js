// require Engineer.js
const Engineer = require("../lib/Engineer");

// ******************** Test for Constructor Arguments ********************
test("Is able to set engineer's github via using constructor arguments", () => {
    // manually set engineer's github
    const tst = "GitHubUserName";
    const x = new Engineer("Test", 10, "test@gmail.com", tst);
    // checking against constructor argument
    expect(x.github).toBe(tst);
});

// ******************** Test for Class Methods ********************
test("Engineer getRole() method functions", () => {
    // manually setting engineer role to Engineer
    const tst = "Engineer";
    const x = new Engineer("Test", 10, "test@gmail.com", "GitHubUserName");
    // checking against method
    expect(x.getRole()).toBe(tst);
});

test("Engineer getGithub() method functions", () => {
    // manually setting engineer's github
    const tst = "GitHubUserName";
    const x = new Engineer("Test", 10, "test@gmail.com", tst);
    // checking against method
    expect(x.getGithub()).toBe(tst);
});