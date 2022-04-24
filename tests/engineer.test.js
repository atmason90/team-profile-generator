const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/engineer");

test("enter GitHub username", () => {
    const gitHubUsername = "username";
    const newEngineer = new Engineer("name", 1, "email", gitHubUsername);
    expect(newEngineer.github).toBe(gitHubUsername);
});

test("getRole() method", () => {
    const engineerRole = "Engineer";
    const newEngineer = new Engineer("name", 1, "email", "github");
    expect(newEngineer.getRole()).toBe(engineerRole);
});

test("getGithub() method", () => {
    const engineerGithub = "username";
    const newEngineer = new Engineer("name", 1, "email", engineerGithub);
    expect(newEngineer.getGithub()).toBe(engineerGithub);
});