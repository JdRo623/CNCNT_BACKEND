const { User } = require('../../commons/user');

const ConsentUser = require('../../dataproviders/database/models/userSchema');

exports.userRepository = async () => {
    return new User("JUAN", "JUAN", "JUAN", "JUAN", "5", "JUAN")
}


exports.findUser = async () => {
    return new User("23654789", "DAVID", "BOWIE", "alphabeto623@gmail.com", "123456", "555666", "23654789")
}