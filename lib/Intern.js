const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email) {
        // this.name = name
        // this.id= id
        // this.email = email,
        super(name, id, email)
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;