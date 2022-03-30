const Router = require('express');
const router = new Router();
const taskController = require('../controllers/taskController');


router.post('/create-task', taskController.create);
router.get('/get-task', taskController.getAll);

module.exports = router;