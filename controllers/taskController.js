const { Task } = require('../models/models');
const ApiError = require('../error/ApiError');

class adminController {
    async create(req, res, next) {
        try {
            let { title, description, expirationDate, categoryId } = req.body;
            const task = await Task.create({ title, description, expirationDate, categoryId });
            return res.json(task);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }


    async getAll(req, res) {
        let task = await Task.findAll();
        return res.json(task);
    }
}

module.exports = new adminController();