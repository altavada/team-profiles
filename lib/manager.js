const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeno) {
        const role = "Manager";
        super(name, id, email, role);
        this.officeno = officeno;
    }
    getOffice() {
        return this.officeno;
    }
}

module.exports = Manager;