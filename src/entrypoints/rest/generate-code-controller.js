const { repository } = require('../../dataproviders/repositories/code-repository');

exports.controller = async (req, res) => {
    const code = await repository();

    //TODO: Generar el codigo de manera aleatoria en una funcion aparte
    //TODO: Validar si el codigo existe en la base de datos
    //TODO: Si el codigo no existe, almacenarlo junto con el id en el documento (El mismo codigo puede ser el Primary Key)
    //TODO: Guardar la fecha de generacion para una politica de vencimiento.
    //TODO: Si existe y el codigo no se ha vencido, entonces repetir hasta 5 veces, si no enviar un error
    //TODO: Enviar el codigo si todo esta en orden
    return res.json({        
        code,
    });
};
