const express = require('express');
const inquirer= require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    password: 'Nala1027',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

//ADD ROLE
function addRole() {
    db.query("SELECT * FROM department", function (err, res) {
      if (err) console.log (err);
      inquirer.prompt([
        {
          name: "title",
          type: "input",
          message: "What is the employees title at this company?"
        },
        {
          name: "salary",
          type: "input",
          message: "What is the employees salary?"
        },
        {
                type:'checkbox',
                message: 'What department do they work for?',
                name: 'license', 
                choices:['Front-end', 'Back-end', 'React', 'serve-maintenance']
          }
      ]).then(function (answers) {
        console.log(answers)
        const selectedDepartment = res.find(department => department.name === answers.departmentName);
        console.log(selectedDepartment)
        //Object into employees table
        db.query("INSERT INTO roles SET ?",
          {
            title: answers.title,
            salary: answers.salary,
            department_id: selectedDepartment.id
          }, function (err, res) {
            if (err) throw err;
            console.log("Added new role " + answers.title + " " + answers.salary + "\n");
            initPrompt();
          })
      })
    })
  };

addRole();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });