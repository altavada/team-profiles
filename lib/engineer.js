const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        const role = "Engineer";
        super(name, id, email, role);
        this.github = github;
    }
    getGit() {
        if(this.github) {
            return this.github;
        } else {
            return 'NOUSERNAME';
        }
    }
}

module.exports = Engineer;