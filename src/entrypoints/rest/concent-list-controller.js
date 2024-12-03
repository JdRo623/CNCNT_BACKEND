const { repository } = require('../../dataproviders/repositories/code-repository');

exports.controller = async (req, res) => {
    const code = await repository();

    //TODO: Obtener el id del usuario y consultar su informacion
    //TODO: Buscar los consentimientos con el id del usuario
    //TODO: Regresar la lista vacia si no encontro nada
    
    return res.json({        
        code,
    });
};
