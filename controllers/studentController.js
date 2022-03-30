const { Student } = require('../models/models');
const ApiError = require('../error/ApiError');

class adminController {
    async create(req, res, next) {
        try {
            let { name, userId, roleId } = req.body;
            const student = await Student.create({ name, userId, roleId });
            return res.json(student);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }


    async getAll(req, res) {
        let student = await Student.findAll();
        return res.json(student);
    }
}

module.exports = new adminController();