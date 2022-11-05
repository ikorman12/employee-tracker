const router=require('express').Router();
const db= require('../../db/connection');

//Get all departments
router.get('/',(req,res)=>{
    db.promise().query(`SELECT * FROM roles`)
    .then(([departmentData])=>res.json(departmentData))
})

//POST route to create new roles
router.post('/',(req,res)=>{
    db.promise().query(`INSERT INTO role SET ?`, {title:req.body.title, salary:req.body.salary, department_id:req.body.id })
    .then(([departmentData])=>res.json({msg:`${departmentData.affectedRows} department added to database`}))
})

//PUT route to change role name
router.put('/:id', (req,res)=>{
    db.promise().query(`UPDATE department SET ? WHERE department.id=?`,[{name:req.body.name},req.params.id]).then(([departmentData])=>res.json({msg:`${departmentData.affectedRows} department updated to database`}))
})

module.exports=router;