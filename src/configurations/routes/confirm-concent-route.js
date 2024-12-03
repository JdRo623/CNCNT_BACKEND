const { controller } = require('../../entrypoints/rest/confirm-concent-controller');

module.exports = router => {
    router.get('/confirmConcent', controller);
};
