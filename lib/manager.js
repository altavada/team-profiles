const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeno) {
        const role = "Manager";
        super(name, id, email, role);
        this.officeno = officeno;
    }
    getOffice() {
        if(this.officeno) {
            return this.officeno;
        } else {
            return 'NOOFFICENUM';
        }
    }
}

module.exports = Manager;