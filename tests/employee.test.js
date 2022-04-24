const { test, expect } = require("@jest/globals");
const Employee = require("../lib/employee");

test("create employee instance", () => {
    const newEmployee = new Employee();
    expect(typeof(newEmployee)).toBe("object");
});

test("enter employee name", () => {
    const employeeName = "Andrew";
    const newEmployee = new Employee(employeeName);
    expect(newEmployee.name).toBe(employeeName);
});

test("enter employee id", () => {
    const employeeId = 1;
    const newEmployee = new Employee("name", employeeId);
    expect(newEmployee.id).toBe(employeeId);
});

test("enter employee email", () => {
    const employeeEmail = "email@email.com";
    const newEmployee = new Employee("name", 1, employeeEmail);
    expect(newEmployee.email).toBe(employeeEmail);
});

test("getName() method", () => {
    const employeeName = "Andrew";
    const newEmployee = new Employee(employeeName);
    expect(newEmployee.getName()).toBe(employeeName);
});

test("getId() method", () => {
    const employeeId = 1;
    const newEmployee = new Employee("name", employeeId);
    expect(newEmployee.getID()).toBe(employeeId);
});

test("getEmail() method", () => {
    const employeeEmail = "email@email.com";
    const newEmployee = new Employee("name", 1, employeeEmail);
    expect(newEmployee.getEmail()).toBe(employeeEmail);
});

test("getRole() method", () => {
    const employeeRole = "Employee";
    const newEmployee = new Employee("name", 1, "email");
    expect(newEmployee.getRole()).toBe(employeeRole);
});

