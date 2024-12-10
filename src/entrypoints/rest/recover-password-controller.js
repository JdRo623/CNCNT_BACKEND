const { passwordRepository } = require('../../dataproviders/repositories/password-repository');
const { sendEmail } = require('../../commons/util/sendEmail');
const { updateUser } = require('../../dataproviders/repositories/user-repository');

exports.controller = async (req, res) => {
    try {
        const { email } = req.body;
        const password = await passwordRepository()
        const hashedPassword = await bcrypt.hash(password, 10);
        response = await updateUser(
            {
                email: email,
            },
            { password: hashedPassword}
        );
        await sendEmail(
            email,
            'Solicitud nueva clave de acceso',
            { name: user.name, password: password },
            './template/recoverPassword.handlebars'
        );
        return res.json({
            response,
        });
    } catch (error) {
        return {
            msg: error,
            errorCode: '500',
        };
    }
};
