const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/models');

const generateJwt = (id, email) => {
    return jwt.sign(
        { id, email },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    );
}

class UserController {
    async registration(req, res, next) {
        const { email, password, genderId } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest("Incorrect email or password!"));
        }
        const candidate = await User.findOne({ where: { email }});
        if (candidate) {
            return next(ApiError.badRequest("User with this email already exist!"));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ email, password: hashPassword, genderId });
        const token = generateJwt(user.id, user.email);

        return res.json({ token });
    }

    async login(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return next(ApiError.internal("User not found!"));
        }

        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal("Password not valid!"));
        }
        const token = generateJwt(user.id, user.email);
        return res.json({ token });
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email)
        return res.json({ token })
    }

    async getUser(req, res){
        try {
            const users = await User.findAll();
            res.status(200).json({ users });
        } catch (err) {
            res.status(500).json(err);
        }
    }

}

module.exports = new UserController();