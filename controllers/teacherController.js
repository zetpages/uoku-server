const { Teacher, Role } = require('../models/models');
const ApiError = require('../error/ApiError');

class adminController {
    async create(req, res, next) {
        try {
            let { name, userId, roleId } = req.body;
            const teacher = await Teacher.create({ name, userId, roleId });
            return res.json(teacher);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }


    async getAll(req, res) {
        let teacher = await Teacher.findAll({include: Role});
        return res.json(teacher);
    }
}

module.exports = new adminController();