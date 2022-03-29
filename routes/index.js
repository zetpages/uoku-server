const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const roleRouter = require('./roleRouter');
const adminRouter = require('./adminRouter');
const genderRouter = require('./genderRouter');
// const brandRouter = require('./brandRouter');
// const typeRouter = require('./typeRouter');
// const deviceRouter = require('./deviceRouter');


router.use('/user', userRouter);
router.use('/role', roleRouter);
router.use('/admin', adminRouter);
router.use('/gender', genderRouter);
// router.use('/type', typeRouter);
// router.use('/brand', brandRouter);
// router.use('/device', deviceRouter);

module.exports = router;