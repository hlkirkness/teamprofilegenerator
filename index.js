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
            
        } else if(answer.choice == 'Intern') {
            // call the createEngineer function
            
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
            
        }
    ])
    .then((answers) => {
        // create a new manager using the Manager class
        const newManager = new Manager(answers.name, answers.id)

        // push the new Manager inside of the employees array
        employees.push(newManager);

        startMenu()

    })
}

const final = () => {
    // start rendering the HTML file using the employees array

    console.log(employees)
}









startMenu();