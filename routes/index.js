const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const roleRouter = require('./roleRouter');
const adminRouter = require('./adminRouter');
const teacherRouter = require('./teacherRouter');
const studentRouter = require('./studentRouter');
const leadRouter = require('./leadRouter');
const taskRouter = require('./taskRouter');
const taskCategoryRouter = require('./taskCategoryRouter');
// const brandRouter = require('./brandRouter');
// const typeRouter = require('./typeRouter');
// const deviceRouter = require('./deviceRouter');


router.use('/user', userRouter);
router.use('/role', roleRouter);
router.use('/admin', adminRouter);
router.use('/teacher', teacherRouter);
router.use('/student', studentRouter);
router.use('/lead', leadRouter);
router.use('/task', taskRouter);
router.use('/task-category', taskCategoryRouter);
// router.use('/gender', genderRouter);

module.exports = router;