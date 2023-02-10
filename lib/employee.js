class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName() {
        if(this.name) {
            return this.name;
        } else {
            console.log('Error: no name provided');
            return 'NONAME';
        }
    };
    getId() {
        if(this.id) {
            return this.id;
        } else {
            console.log('Error: no ID provided');
            return 'NOID';
        }
    };
    getEmail() {
        if(this.email) {
            return this.email;
        } else {
            console.log('Error: no email provided');
            return 'NOEMAIL';
        }
    }
    getRole() {
        if(this.role) {
            return this.role;
        } else {
            return "Employee";
        }
    }
}

module.exports = Employee;