const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./src/generate')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const Employee = require('./lib/employee');
const team = []; 

const addEmp=()=> {
    return inquirer.prompt (
        [
        {
            type: 'input',
            name: 'name',
            message: 'Employee name: ', 
        },
        {
            type: 'input',
            name: 'id',
            message: "Employee ID: ",
        },
        {
            type: 'input',
            name: 'email',
            message: "Employee email: ",
        },
        {
            type: 'list',
            name: 'role',
            message: "Employee role: ",
            choices: ['Engineer', 'Intern', 'Manager']
        },
        {
            type: 'input',
            name: 'git',
            message: "Engineer's github username: ",
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: "Intern's School: ",
            when: (input) => input.role === "Intern",
        },
        {
            type: 'input',
            name: 'office',
            message: "Manager's office number: ",
            when: (input) => input.role === "Manager",
        },
        {
            type: 'confirm',
            name: 'more',
            message: 'More team members?',
            default: false
        }
    ]
    )
    .then(res => {
        let { name, id, email, role, git, school, office, more } = res; 
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, git);
            console.log(employee);
        }
        else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        else if (role === "Manager") {
            employee = new Manager (name, id, email, office);
            console.log(employee);
        }
        team.push(employee)
        if (more) {
            return addEmp(team); 
        } else {
            console.log(team)
            writefile(team);
            return team;
        }
    })
};

addEmp();

function writefile (res){
    fs.writeFileSync('index.html', generate(res))
}