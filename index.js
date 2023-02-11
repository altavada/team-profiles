const inquirer = require('inquirer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer')
let managerInfo;
let engineerInfo;
let internInfo;

inquirer.prompt([
    {
        type: 'input',
        message: "Enter team manager's name here:",
        name: 'name',
    },
    {
        type: 'input',
        message: "Enter team manager's employee ID:",
        name: 'id',
    },
    {
        type: 'input',
        message: "Enter team manager's email address:",
        name: 'email',
    },
    {
        type: 'input',
        message: "Enter team manager's office number here:",
        name: 'officeno',
    }
])
.then((res) => {
    if(res.name && res.id && res.email && res.officeno) {
        managerInfo = new Manager(res.name, res.id, res.email, res.officeno);
        console.log(managerInfo.name);
        return;
    } else {
        console.log('Manager info incomplete.');
        return;
    }
})


function menu() {
    inquirer
        .prompt([
            // menu prompt
        ])
        .then((response) => {
            switch(response.menuoption) {
                case "Intern":
            
                case "Engineer":

                default:
                    console.log("Err");
            }
        })
}