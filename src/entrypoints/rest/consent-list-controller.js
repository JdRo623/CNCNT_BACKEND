const { getConsentRepository } = require('../../dataproviders/repositories/consent-repository');

exports.controller = async (req, res) => {
    const filters = [{ id_user_s: req.body.userId }, { id_user_r: req.body.userId }];
    const consentList = await getConsentRepository(filters);
    return res.json({
        consentList,
    });
};
