const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        const role = 'Intern';
        super(name, id, email, role);
        this.school = school;
    }
    getSchool() {
        if(this.school) {
            return this.school;
        } else {
            return 'NOSCHOOLNAME';
        }
    }
}

module.exports = Intern;