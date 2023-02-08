const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Enter employee name:',
                    name: 'name',
                }
            ])
            .then((response) => {
                this.name = response.name;
            });
    };
    getId() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Enter employee ID:',
                    name: 'id',
                }
            ])
            .then((response) => {
                this.id = response.id;
            });
    };
    getEmail() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Enter employee email:',
                    name: 'email',
                }
            ])
            .then((response) => {
                this.email = response.email;
            });
    };
    getRole() {
        if(this.role) {
            return this.role;
        } else {
            console.log("Employee");
            return "Employee";
        }
    }
}
  
module.exports = Employee;