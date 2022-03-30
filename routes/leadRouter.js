const Router = require('express');
const router = new Router();
const leadController = require('../controllers/leadController');


router.post('/create-lead', leadController.create);
router.get('/get-lead', leadController.getAll);

module.exports = router;