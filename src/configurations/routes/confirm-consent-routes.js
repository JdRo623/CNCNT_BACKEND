const { controller } = require('../../entrypoints/rest/confirm-consent-controller');

module.exports = router => {
    router.get('/confirmConsent', controller);
};
