const Manager = require("../lib/manager");
const Employee = require("../lib/employee");
const { test, expect } = require("@jest/globals");

test("enter office number", () => {
    const number = 555;
    const newManager = new Manager("name", 1, "email", number);
    expect(newManager.officeNumber).toBe(number);
});

test("getRole() method", () => {
    const managerRole = "Manager";
    const newManager = new Manager("name", 1, "email", "officeNumber");
    expect(newManager.getRole()).toBe(managerRole);
});
