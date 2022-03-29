const Router = require('express');
const router = new Router();
const genderController = require('../controllers/genderController');


router.post('/create-gender', genderController.create);
router.get('/get-gender', genderController.getAll);

module.exports = router;