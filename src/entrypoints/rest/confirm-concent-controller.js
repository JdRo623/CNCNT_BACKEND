const { repository } = require('../../dataproviders/repositories/code-repository');

exports.controller = async (req, res) => {
    const code = await repository();

    //TODO: Obtener el id del usuario y consultar su informacion
    //TODO: Buscar los consentimientos con el id del usuario
    //TODO: Encontrar la informacion del usuario que tenga el codigo ingresado
    //TODO: Obtener el consentimiento con el id del usuario + el id del usuario encontrado
    //TODO: Si exite, confirmar el consentimiento.
    //TODO: Enviar el aceptado
    //TODO: Enviar respuesta de codigo erroneo si no se encuentra el consentimiento
    
    return res.json({        
        code,
    });
};
