const Concent = require('../database/models/concentSchema');

exports.createConsentRepository = async req => {
    var response = {
        msg: 'Error',
        errorCode: '400',
    };

    const concent = new Concent({
        date: Date(),
        id_user_s: req.id_user_s,
        id_user_r: req.id_user_r,
        status: 'FV',
    });
    try {
        await concent.save().then(val => {
            response = {
                msg: 'Consentimiento creado exitosamente',
                errorCode: '000',
            };
        });
    } catch (error) {
        response = {
            msg: 'Error: ' + error,
            errorCode: '400',
        };
    }

    return response;
};

exports.getConsentRepository = async filters => {
    var response = {
        msg: 'Error',
        errorCode: '400',
    };
    try {
        response = await Concent.find({
            $or: filters,
        })
    } catch (error) {
        response = {
            msg: 'Error: ' + error,
            errorCode: '400',
        };
    }
    return response;
};

exports.updateConsentRepository = async (filter, update) => {
    var response = {
        msg: 'Error',
        errorCode: '400',
    };
    try {
        await Concent.updateOne(
            filter,//{ name: 'John Doe' }, // Filter
            { $set: update/*{ email: 'john.doe@newdomain.com' } */} // Update
        ).then(val => {
            response = {
                msg: 'Consentimiento actualizado exitosamente',
                errorCode: '000',
            };
        });
    } catch (error) {
        response = {
            msg: 'Error: ' + error,
            errorCode: '400',
        };
    }

    return response;
};
