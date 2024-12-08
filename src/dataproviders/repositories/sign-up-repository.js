const ConsentUser = require('../database/models/userSchema');
const {passwordRepository} = require('./password-repository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signUpRepository = async req => {
    try {
        const { name, lastName, email } = req.body;
        const password = await passwordRepository()
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new ConsentUser({ name, lastName, email, 
            password: hashedPassword,
            consentCode: email,
            consentCodeDate: 'NA',
            status: "A"
          });
        await user.save();
        return {
            password: password,
            msg: 'User registered successfully',
            errorCode: '201',
        }
    } catch (error) {
        return {
            msg: error,
            errorCode: '500',
        };
    }
};
