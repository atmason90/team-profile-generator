# Team Profile Generator
![License Badge](https://img.shields.io/badge/License-MIT-blue)

GitHub Repository: https://github.com/atmason90/team-profile-generator


## Table of Contents
* [Description](#description)
* [Application Demo](#application-demo)
* [Usage Instructions](#usage-instructions)
* [Code Examples](#code-examples)
* [Technologies Used](#technologies-used)
* [Questions](#questions)
* [License](#license)


## Description

The purposed of this project was to create a command line application that allows a user to generate a team profile by answering a set of prompts presented to them inside the terminal.

This application uses node.js and the npm inquirer package as it's core technologies. Jest was used for unit testing to ensure that the app would function properly.


## Application Demo

https://user-images.githubusercontent.com/99947655/165204617-ddd7d97b-8db4-4af3-b01e-8de7900dcdaa.mp4


## Usage Instructions

In order to use this application, follow these steps:
1. Clone this repository to your local machine
2. Open the repository in your code editor of choice
3. Navigate to the repository in your terminal and run ```bash npm install```, which will install Inquirer and Jest
4. In your terminal, run ```bash node index.js``` to initialize the application
5. Answer all provided prompts
6. Once complete - navigate to the "dist" directory to find your myteam.html file


## Code Examples

This is an example shows part of an async function I used to continue prompting the user depending on their answers. 

```js
async function assembleTeam() {
    const promise = new Promise((resolve, reject) => {
        employeePrompt()
        .then(function({ name, id, email, role }) {

            if(role === "Manager") {
                managerPrompt().then(function({ officeNumber }) {
                    this.employee = new Manager(name, id, email, officeNumber, role);
                    teamArray.push(employee);
                    addEmployee()
                    .then(({ addEmployee }) => {
                        if(addEmployee === true) {
                            assembleTeam();
                        } else {
                            resolve("complete")
                        }
                    })
                });

            } else if (role === "Engineer") {
                engineerPrompt().then(function({ github }) {
                    this.employee = new Engineer(name, id, email, github, role);
                    teamArray.push(employee);
                    addEmployee()
                    .then(({ addEmployee }) => {
                        if(addEmployee === true) {
                            assembleTeam();
                        } else {
                            resolve("complete");
                        }
                    })
                });   
            
            } else if (role === "Intern") {
                internPrompt().then(function({ school }) {
                    this.employee = new Intern(name, id, email, school, role);
                    teamArray.push(employee);
                    addEmployee()
                    .then(({ addEmployee }) => {
                        if(addEmployee === true) {
                            assembleTeam();
                        } else {
                            resolve("complete")
                        }
                    })
                });
            }
```

This example shows how I structured my Jest tests.

```js
const { test, expect } = require("@jest/globals");
const Employee = require("../lib/employee");

test("create employee instance", () => {
    const newEmployee = new Employee();
    expect(typeof(newEmployee)).toBe("object");
});
```


## Technologies Used

![Java Badge](https://img.shields.io/badge/Language-JavaScript-yellow)
![Node Badge](https://img.shields.io/badge/Environment-Node.js-green)
![Inquirer Badge](https://img.shields.io/badge/NPM-Inquirer-red)
![Jest Badge](https://img.shields.io/badge/Test-Jest-success)


## Questions

If you have any questions regarding this project, please reach out to me via email at atmason90@gmail.com.

You can view my other projects on GitHub by visiting my profile. 
[atmason90](https://github.com/atmason90)


## License

MIT License

Copyright (c) 2022 Andrew Mason

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
