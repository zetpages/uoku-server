const Router = require('express');
const router = new Router();
const studentController = require('../controllers/studentController');


router.post('/create-student', studentController.create);
router.get('/get-student', studentController.getAll);

module.exports = router;