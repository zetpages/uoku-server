const Router = require('express');
const router = new Router();
const userRoleController = require('../controllers/roleController');


router.post('/create-role', userRoleController.create);
router.get('/get-role', userRoleController.getAll);

module.exports = router;