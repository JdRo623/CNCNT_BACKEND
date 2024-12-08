const { updateConsentRepository, getConsentRepository } = require('../../dataproviders/repositories/concent-repository');
const { findUser} = require('../../dataproviders/repositories/user-repository')
exports.controller = async (req, res) => {
    var response = {
        msg: 'Error',
        errorCode: '400',
    }
    const concent = await updateConsentRepository([{id: req.body.consentId }]);
    const user = await findUser([{consentCode: req.body.consentCode }])

    if(user.id == consent.id_user_s || user.id == consent.id_user_r){
        const updateFilters = {id: req.body.consentId };
        const update = {status: "SV"};
        if(consent.status == "SV" ){
            update.status = "A"
        }
        response = await updateConsentRepository(updateFilters, update);

    }
    return res.json({
        response
    });

    //TODO: Obtener el id del usuario y consultar su informacion
    //TODO: Buscar los consentimientos con el id del usuario
    //TODO: Encontrar la informacion del usuario que tenga el codigo ingresado
    //TODO: Obtener el consentimiento con el id del usuario + el id del usuario encontrado
    //TODO: Si exite, confirmar el consentimiento.
    //TODO: Enviar el aceptado
    //TODO: Enviar respuesta de codigo erroneo si no se encuentra el consentimiento
};
