const { test, expect } = require("@jest/globals");
const Intern = require("../lib/intern");

test("enter school", () => {
    const internSchool = "college";
    const newIntern = new Intern("name", 1, "email", internSchool);
    expect(newIntern.school).toBe(internSchool);
});

test("getRole() method", () => {
    const internRole = "Intern";
    const newIntern = new Intern("name", 1, "email", "school");
    expect(newIntern.getRole()).toBe(internRole);
});

test("getSchool() method", () => {
    const internSchool = "college";
    const newIntern = new Intern("name", 1, "email", internSchool);
    expect(newIntern.getSchool()).toBe(internSchool);
});