const { User } = require('../../commons/user');
exports.userRepository = async () => {
    return new User("JUAN", "JUAN", "JUAN", "JUAN", "5", "JUAN")
}