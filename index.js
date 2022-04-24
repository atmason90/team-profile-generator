const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");


const employeePrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Employee Name: ",
        },
        {
            type: "input",
            name: "id",
            message: "Employee ID #: ",
        },
        {
            type: "input",
            name: "email",
            message: "Employee email: ",
        },
        {
            type: "list",
            name: "role",
            message: "Employee role: ",
            choices: ["Manager", "Engineer", "Intern"],
        },
    ])
};

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "officeNumber",
            message: "Manager's office number: ",
        }
    ])
};

const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "Engineer's GitHub username: ",
        }
    ])
};

const internPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "Intern's School: "
        }
    ])
};

const addNewMember = () => {
    return inquirer.prompt([
        {
            type: "confirm",
            name: "addTeamMember",
            message: "Add another team member?"
        }
    ])
}

async function assembleTeam() {
    let teamArray = [];

}