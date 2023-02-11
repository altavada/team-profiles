const inquirer = require('inquirer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const { buildPage } = require('./src/fswriter');
let managerInfo;
let engineerInfo = [];
let internInfo = [];

initManager();

function initManager() {
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
    ]).then((res) => {
        if(res.name && res.id && res.email && res.officeno) {
            managerInfo = new Manager(res.name, res.id, res.email, res.officeno);
            menu();
            return;
        } else {
            inquirer.prompt([
                {
                    type: 'list',
                    message: 'Manager info incomplete.',
                    choices: ['Try again', 'Cancel'],
                    name: 'menu',
                }
            ]).then((res) => {
                if(res.menu == "Try again") {
                    initManager();
                }
                return;
            })
            return;
        }
    })
}

function menu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'menuoption',
            message: 'Choose an option to continue making your team profile:',
            choices: ['Add new engineer', 'Add new intern', 'Finished adding team members'],
        }
    ]).then((res) => {
        switch(res.menuoption) {
            case "Add new intern":
                newIntern();
                break;
            case "Add new engineer":
                newEngineer();
                break;
            case "Finished adding team members":
                buildPage(managerInfo, engineerInfo, internInfo);
                console.log('Writing file...');

        }
        return;
    })
}

function newIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter intern's name here:",
            name: 'name',
        },
        {
            type: 'input',
            message: "Enter intern's employee ID here:",
            name: 'id',
        },
        {
            type: 'input',
            message: "Enter intern's email address here:",
            name: 'email',
        },
        {
            type: 'input',
            message: "Enter intern's school of origin here:",
            name: 'school',
        }
    ]).then((res) => {
        if(res.name && res.id && res.email && res.school) {
            let intern = new Intern(res.name, res.id, res.email, res.school);
            internInfo.push(intern);
            menu();
            return;
        } else {
            inquirer.prompt([
                {
                    type: 'list',
                    message: 'Intern info incomplete.',
                    choices: ['Try again', 'Cancel'],
                    name: 'menu',
                }
            ]).then((res) => {
                switch(res.menu) {
                    case "Try again":
                        newIntern();
                        break;
                    case "Cancel":
                        menu();
                }
                return;
            })
            return;
        }
    })
}

function newEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter engineer's name here:",
            name: 'name',
        },
        {
            type: 'input',
            message: "Enter engineer's employee ID here:",
            name: 'id',
        },
        {
            type: 'input',
            message: "Enter engineer's email address here:",
            name: 'email',
        },
        {
            type: 'input',
            message: "Enter engineer's GitHub username here:",
            name: 'github',
        }
    ]).then((res) => {
        if(res.name && res.id && res.email && res.github) {
            let engineer = new Engineer(res.name, res.id, res.email, res.github);
            engineerInfo.push(engineer);
            menu();
            return;
        } else {
            inquirer.prompt([
                {
                    type: 'list',
                    message: 'Engineer info incomplete.',
                    choices: ['Try again', 'Cancel'],
                    name: 'menu',
                }
            ]).then((res) => {
                switch(res.menu) {
                    case "Try again":
                        newEngineer();
                        break;
                    case "Cancel":
                        menu();
                }
            })
            return;
        }
    })
}