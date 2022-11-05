const router=require('express').Router();
const db= require('../../db/connection');

//Get all departments
router.get('/',(req,res)=>{
    db.promise().query(`SELECT * FROM department`)
    .then(([departmentData])=>res.json(departmentData))
})

//POST route to create new dep
router.post('/',(req,res)=>{
    db.promise().query(`INSERT INTO department SET ?`, {name:req.body.name})
    .then(([departmentData])=>res.json({msg:`${departmentData.affectedRows} department added to database`}))
})

//PUT route to change dep name
router.put('/:id', (req,res)=>{
    db.promise().query(`UPDATE department SET ? WHERE department.id=?`,[{name:req.body.name},req.params.id]).then(([departmentData])=>res.json({msg:`${departmentData.affectedRows} department updated to database`}))
})

module.exports=router;