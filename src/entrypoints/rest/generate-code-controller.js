const { repository } = require('../../dataproviders/repositories/code-repository');
const { userRepository } = require('../../dataproviders/repositories/user-repository');

exports.controller = async (req, res) => {
    const user = await userRepository();
    const code = await repository(userCode = user.consentCode);
    if (code != null) {
        user.consentCode = code
        user.consentCodeDate = Date()
    }
    return res.json({
        user,
    });
};
