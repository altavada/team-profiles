const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        const role = "Engineer";
        super(name, id, email, role);
        this.github = github;
    }
    getGit() {
        return this.github;
    }
}

module.exports = Engineer;