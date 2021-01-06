const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const team = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

const managersQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "What is your name?"
    },

    {
        type: "input",
        name: "managerId",
        message: "What is your ID?"
    },

    {
        type: "input",
        name: "emailAddress",
        message: "What is your email address"
    },

    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?"
    },

];

function addManager(){
inquirer.prompt(managersQuestions).then (answers =>{
    console.log(answers);
    const manager = new Manager(answers.managerName, answers.managerId, answers.emailAddress, answers.officeNumber)
    team.push(manager)

})
}


const engineerQuestions = [
        {
            type: "input",
            name: "engineerName",
            message: "What is your name?"
        },
    
        {
            type: "input",
            name: "engineerId",
            message: "What is your ID?"
        },
    
        {
            type: "input",
            name: "emailAddress",
            message: "What is your email address?"
        },
    
        {
            type: "input",
            name: "github",
            message: "What is your github?"
        },
    
    ];

    function addEngineer(){
        inquirer.prompt(engineerQuestions).then (answers =>{
            console.log(answers);
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.emailAddress, answers.gitHub)
            team.push(engineer)
        
        })
        
        }
    
        const employeeQuestions = [
            {
                type: "input",
                name: "employeeName",
                message: "What is your name?"
            },
        
            {
                type: "input",
                name: "employeeId",
                message: "What is your ID?"
            },
        
            {
                type: "input",
                name: "emailAddress",
                message: "What is your email address"
            },
                
        ];
        
        function addEmployee(){
        inquirer.prompt(employeeQuestions).then (answers =>{
            console.log(answers);
            const employee = new employee(answers.employeeName, answers.employeeId, answers.emailAddress)
            team.push(employee)
        
        })
        }

addManager();
addEngineer();
addEmployee();
