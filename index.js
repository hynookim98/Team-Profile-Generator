// const Employee = require("./lib/Employee");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

// initialize an array to hold all team members
const teamMembers = [];

function teamGenerator() {
    console.log("Please build your team: ");
    function createManager() {
        // use inquire.prompt to ask user and take user input
        inquirer.createPromptModule([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the manager's name?",
            },
            {
                type: 'input',
                name: 'managerId',
                message: "what is the manager's ID?",
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the manager's email?"
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "What is the manager's office number?"
            },
        ])
        // use .then to take all the input from user and save it in 'input'
        .then((input) => {
            // same format as new Manager(name, id, email, officeNumber)
            const manager = new Manager (
                input.managerName,
                input.managerId,
                input.managerEmail,
                input.managerOfficeNumber
            );

            // adds newly created manager to team member array
            teamMembers.push(manager);
            // call separate function to finish creating team
            createRestTeam();
        });
    }

    function createRestTeam() {
        // ask user to see what kind of employee they want to create next
        inquirer.prompt([
            {
                type: 'list',
                name: 'employeeChoice',
                message: 'Which type of team member would you like to add?',
                choices: [
                    'Engineer',
                    'Intern',
                    "I'm all done",
                ],
            },
        ])
        .then((input) => {
            if(input.employeeChoice === "Engineer") {
                createEngineer();
            } 
            else if (input.employeeChoice === "Intern") {
                createIntern();
            }
            else {
                finishTeam();
            }
        });
    }

    function createEngineer() {
        // prompting user to take information for new engineer 
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?",
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the engineer's id?"
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the engineer's email?"
            },
            {
                type: 'input',
                name: 'engineerGitHubUserName',
                message: "What is the engineer's GitHub username?",
            },
        ])
        .then((input) => {
            // same format as new Engineer(name, id, email, github)
            const engineer = new Engineer(
                input.engineerName,
                input.engineerId,
                input.engineerEmail,
                input.engineerGitHubUserName
            );
            // adding newly created engineer to team member array
            teamMembers.push(engineer);
            // call function to create team again
            createRestTeam();
        });
    }

    function createIntern() {
        // prompting user to take information for new intern
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?"
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is the intern's id?"      
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the intern's email?"
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What is the intern's school?"                
            },
        ])
        .then((input) => {
            // same format as new Intern(name, id, email, school)
            const intern = new Intern(
                input.internName,
                input.internId,
                input.internEmail,
                input.internSchool
            );
            // adding newly created intern to team member array
            teamMembers.push(intern);
            // call function to create team
            createRestTeam();
        });
    }

    function finishTeam() {
        
    }
}