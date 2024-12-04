const { Concent } = require('../../commons/concent');

exports.createConsentRepository = async (userCode) => {
    return new(Concent("test-id","test-id","test-id","test-id","test-id"))
}

exports.getConsentRepository = async (userCode) => {
    const concents = [
        new Concent("test-id","test-id","test-id","test-id","test-id"),
        new Concent("test-id","test-id","test-id","test-id","test-id"),
        new Concent("test-id","test-id","test-id","test-id","test-id")
    ]
    return concents
}

exports.updateConsentRepository = async (userCodeR, userCodeA) => {
    return new(Concent("test-id","test-id","test-id","test-id","test-id"))
}