const router= require('express').Router();
const departmentRoutes= require('./departmentroutes');
const roleRoutes= require('./roleRoutes');

router.use('/departments',departmentRoutes);
router.use('/roles', roleRoutes);

module.exports= router;