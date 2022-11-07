const router=require('express').Router();
const db= require('../../db/connection');

//GET all employees
router.get('/',(req,res)=>{
    db.promise().query(`SELECT * FROM employees`)
    .then(([emData])=>res.json(emData))
})

//POST route to create new employees
router.post('/',(req,res)=>{
    db.promise().query(`INSERT INTO employee SET ?`, {first_name:req.body.first_name, last_name:req.body.last_name, employee_id:req.body.id, manager_id:req.body.manager_id})
    .then(([emData])=>res.json({msg:`${emData.affectedRows} employee added to database`}))
})

//PUT route to change employee name
router.put('/:id', (req,res)=>{
    db.promise().query(`UPDATE employee SET ? WHERE employee.id=?`,[{name:req.body.name},req.params.id]).then(([emData])=>res.json({msg:`${emData.affectedRows} employee updated to database`}))
})

//Delete route to delete role name
router.delete(':/id',(req,res)=>{
    db.promise.query(`DELETE employee SET ? WHERE employee.id=?`, [{name:req.body.name}, req.params.id]).then(([emData])=>res.json({msg:`${emData.affectedRows} deleted from database`}))
})

module.exports=router;