const Router = require('express');
const router = new Router();
const adminController = require('../controllers/adminController');


router.post('/create-admin', adminController.create);
router.get('/get-admin', adminController.getAll);

module.exports = router;