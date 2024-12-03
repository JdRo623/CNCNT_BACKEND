const { repository } = require('../../dataproviders/repositories/code-repository');

exports.controller = async (req, res) => {
    const code = await repository();

    //TODO: Obtener el codigo ingresado
    //TODO: Obtener el id del usuario y consultar su informacion
    //TODO: Encontrar el usuario al cual pertenece el codigo ingresado
    //TODO: Crear el consentimiento con la informacion de ambos usuarios y almacenarlo en la base de datos
    //TODO: Regresar el aprobado al usuario si todo salio bien
    //TODO: POSIBLEMENTE NOTIFICAR AL SEGUNDO USUARIO DE LA INTENT
    
    return res.json({        
        code,
    });
};
