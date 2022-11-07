const router= require('express').Router();
const { route } = require('./departmentroutes');
const departmentRoutes= require('./departmentroutes');
const roleRoutes= require('./roleRoutes');
const emRoutes= require('./employeeRoutes')

router.use('/departments',departmentRoutes);
router.use('/roles', roleRoutes);
router.use('/employees', emRoutes);

module.exports= router;