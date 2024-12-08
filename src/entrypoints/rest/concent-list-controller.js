const { getConsentRepository } = require('../../dataproviders/repositories/concent-repository');

exports.controller = async (req, res) => {
    const filters = [{ id_user_s: req.body.userCode }, { id_user_r: req.body.userCode }];
    const concentList = await getConsentRepository(filters);
    return res.json({
        concentList,
    });
};
