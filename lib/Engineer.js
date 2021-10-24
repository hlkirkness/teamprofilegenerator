const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, officeNumber) {
        // this.name = name
        // this.id= id
        // this.email = email,
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;