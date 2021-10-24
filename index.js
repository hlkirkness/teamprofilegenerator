var inquirer = require('inquirer');

// import all your classes
const Manager = require('./lib/Manager.js')


// global array for the list of employees
const employees = [];


//start menu
const startMenu = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Which Employee type would you like to add?",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Finished adding."
            ]
        },
    ])
    .then((answer) => {
        if(answer.choice == 'Manager') {
            // call the createManager function
            addManager()
        } else if(answer.choice == 'Engineer') {
            // call the createEngineer function
            addEngineer()
            
        } else if(answer.choice == 'Intern') {
            // call the createEngineer function
            addIntern()
        }  else {
            // class the final function/renderHTML fuinctiopn
            final()
        }
    })
}


const addManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the manager?",
            
        },
        {
            type: "input",
            name: "id",
            message: "What is the id of the manager?",
        },
        {
            type: "input",
            name: "name",
            message: "What is the email of the manager?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the office number of the manager?",
        },
    ])
    .then((answers) => {
        // create a new manager using the Manager class
        const newManager = new Manager(answers.name, answers.id)

        // push the new Manager inside of the employees array
        employees.push(newManager);

        startMenu()

    })
}

const addEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the engineer?",
            
        },
        {
            type: "input",
            name: "id",
            message: "What is the id of the engineer?",
        },
        {
            type: "input",
            name: "name",
            message: "What is the email of the engineer?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the office number of the engineer?",
        },
    ])
    .then((answers) => {
        // create a new engineer using the engineer class
        const newEngineer = new Engineer(answers.name, answers.id)

        // push the new engineer inside of the employees array
        employees.push(newEngineer);

        startMenu()

    })
}

const addIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the intern?",
            
        },
        {
            type: "input",
            name: "id",
            message: "What is the id of the intern?",
        },
        {
            type: "input",
            name: "name",
            message: "What is the email of the intern?",
        },
        
    ])
    .then((answers) => {
        // create a new engineer using the engineer class
        const newIntern = new Intern(answers.name, answers.id)

        // push the new engineer inside of the employees array
        employees.push(Intern);

        startMenu()

    })
}

const final = () => {
    // start rendering the HTML file using the employees array

    console.log(employees)
}









startMenu();