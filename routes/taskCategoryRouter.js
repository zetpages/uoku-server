const Router = require('express');
const router = new Router();
const taskCategoryController = require('../controllers/taskCategoryController');


router.post('/create-task-category', taskCategoryController.create);
router.get('/get-task-category', taskCategoryController.getAll);

module.exports = router;