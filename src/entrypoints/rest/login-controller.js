const { loginUserRepository } = require('../../dataproviders/repositories/login-repository');

exports.controller = async (req, res) => {
    const response = await loginUserRepository(req);
    return res.json({
        response,
    });
};