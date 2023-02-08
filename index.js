const inquirer = require('inquirer');
const Employee = require('./lib/employee');

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