const Router = require('express');
const router = new Router();
const teacherController = require('../controllers/teacherController');


router.post('/create-teacher', teacherController.create);
router.get('/get-teacher', teacherController.getAll);

module.exports = router;