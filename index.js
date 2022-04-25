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

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "confirm",
            name: "addEmployee",
            message: "Add another team member?"
        }
    ])
}

async function assembleTeam() {
    let teamArray = [];
    const promise = new Promise((resolve, reject) => {
        employeePrompt()
        .then(function({ name, id, email, role }) {

            if(role === "Manager") {
                managerPrompt().then(function({ officeNumber }) {
                    this.employee = new Manager(name, id, email, officeNumber, role);
                    teamArray.push(employee);
                    resolve("complete");
                });

            } else if (role === "Engineer") {
                engineerPrompt().then(function({ github }) {
                    this.employee = new Engineer(name, id, email, github, role);
                    teamArray.push(employee);
                    resolve("complete");
                });   
            
            } else if (role === "Intern") {
                internPrompt().then(function({ school }) {
                    this.employee = new Intern(name, id, email, school, role);
                    teamArray.push(employee);
                    resolve("complete")
                });
            }
        })
        .catch(function(err) {
            console.log(err);
        });
    });

    const result = await promise;


    function roleItem(employee) {
        if(employee.getRole() === "Manager") {
            return `Office number: ${employee.officeNumber}`;
        }
        if(employee.getRole() === "Engineer") {
            return `GitHub: ${employee.github}`;
        }
        if(employee.getRole() === "Intern") {
            return `School: ${employee.school}`;
        }
    }

    function htmlCards() {
        let html = "";
        for(var i = 0; i < teamArray.length; i++) {
            html += `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>${teamArray[i].name}</h4>
            </div>
            <div class="col card-header">
                <h4>${teamArray[i].getRole()}</h4 >
            </div >
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: ${teamArray[i].id}</li>
                <li class="list-group-item">Email: ${teamArray[i].email}</li>
                <li class="list-group-item"> ${roleItem(teamArray[i])}</li>
            </ul>
        </div > `
        }
        return html;
    }

    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Document</title>
        <style>
            .row {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin-top: 20px;
                margin-bottom: 20px;
                }
            .card {
                padding: 15px;
                border-radius: 6px;
                background-color: white;
                color: lightskyblue;
                margin: 15px;
                }
            .text {
                padding: 15px;
                border-radius: 6px;
                background-color: lightskyblue;
                color: black;
                margin: 15px;
                }
            .col {
                flex: 1;
                text-align: center;
                }
            </style>
    </head>

        <body>
            <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
                <span class="navbar-brand mb-0 h1">
                    <h1>My Team</h1>
                </span>
            </nav>
            <div class="row">
                ${htmlCards()}
            </div>
        </body>
    </html>`

    fs.writeFile("./dist/myteam.html", html, function(err) {
        if(err) throw err;
        console.log("Your file has been created successfully!");
    });
}

assembleTeam();