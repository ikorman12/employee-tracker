//ADD ROLE
function addRole() {
    db.query("SELECT * FROM departments", function (err, res) {
      if (err) throw err;
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
            name: "departmentName",
            type: "list",
            choices: res.map(department => department.name),
            message: "Select department ID"
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