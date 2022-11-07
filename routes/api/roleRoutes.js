const router=require('express').Router();
const db= require('../../db/connection');

//Get all roles
router.get('/',(req,res)=>{
    db.promise().query(`SELECT * FROM roles`)
    .then(([roleData])=>res.json(roleData))
})

//POST route to create new roles
router.post('/',(req,res)=>{
    db.promise().query(`INSERT INTO role SET ?`, {title:req.body.title, salary:req.body.salary, department_id:req.body.id })
    .then(([roleData])=>res.json({msg:`${roleData.affectedRows} department added to database`}))
})

//PUT route to change role name
router.put('/:id', (req,res)=>{
    db.promise().query(`UPDATE role SET ? WHERE role.id=?`,[{name:req.body.name},req.params.id]).then(([roleData])=>res.json({msg:`${roleData.affectedRows} department updated to database`}))
})

//Delete route to delete role name
router.delete(':/id',(req,res)=>{
    db.promise.query(`DELETE role SET ? WHERE role.id=?`, [{name:req.body.name}, req.params.id]).then(([roleData])=>res.json({msg:`${roleData.affectedRows} deleted from database`}))
})

module.exports=router;