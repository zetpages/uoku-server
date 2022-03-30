const { Admin, Role, User } = require('../models/models');
const ApiError = require('../error/ApiError');

class adminController {
    async create(req, res, next) {
        try {
            let { name, userId, roleId} = req.body;
            const admin = await Admin.create({ name, userId, roleId });
            return res.json(admin);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }


    async getAll(req, res) {
        let admin = await Admin.findAll({include: Role});
        return res.json(admin);
    }
}

module.exports = new adminController();