const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // this.name = name
        // this.id= id
        // this.email = email,
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }

}

// const newManager = new Manager("Peter",1, "peter@mail.com", 12345)

// console.log(newManager.getRole())

module.exports = Manager;