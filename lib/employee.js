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
    logoutput() {
        console.log(this.name);
    }
}
  
module.exports = Employee;