const { controller } = require('../../entrypoints/rest/create-concent-controller');

module.exports = router => {
    router.post('/createConcent', controller);
};
