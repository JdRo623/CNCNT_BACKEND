const { updateUser } = require('../../dataproviders/repositories/user-repository');

exports.controller = async (req, res) => {
    try {
        const { id,password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        response = await updateUser(
            {
                _id: id,
            },
            { password: hashedPassword}
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
