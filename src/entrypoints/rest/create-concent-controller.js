const { createConsentRepository } = require('../../dataproviders/repositories/concent-repository');
const { findUser } = require('../../dataproviders/repositories/user-repository');
exports.controller = async (req, res) => {
    var response = {
        msg: 'Error',
        errorCode: '400',
    };

    user = await findUser(req.body.concentCode)
    var consentInfo = {
        id_user_s: req.body.id_user_s,
        id_user_r: user.id,
    }
    response = await createConsentRepository(consentInfo);

    return res.json(response);
};
