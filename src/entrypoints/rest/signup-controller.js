const { signUpRepository } = require('../../dataproviders/repositories/sign-up-repository');

exports.controller = async (req, res) => {
    const response = await signUpRepository(req);
    return res.json({
        response,
    });
};