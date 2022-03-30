const { TaskCategory } = require('../models/models');
const ApiError = require('../error/ApiError');

class adminController {
    async create(req, res, next) {
        try {
            let { name} = req.body;
            const taskCategory = await TaskCategory.create({ name });
            return res.json(taskCategory);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }


    async getAll(req, res) {
        let taskCategory = await TaskCategory.findAll();
        return res.json(taskCategory);
    }
}

module.exports = new adminController();