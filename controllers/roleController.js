const { Role } = require('../models/models');
const ApiError = require('../error/ApiError');

class RoleController {
    async create(req, res, next) {
        try {
            let { name } = req.body;
            const userRole = await Role.create({ name });
            return res.json(userRole);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        let userRole = await Role.findAll();
        return res.json(userRole);
    }
}

module.exports = new RoleController();