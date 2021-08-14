class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id= id
        this.email = email
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

// const Employee2 = new Employee("Peter", "peter@mail.com")

// console.log(Employee2.getRole())

module.exports = Employee;