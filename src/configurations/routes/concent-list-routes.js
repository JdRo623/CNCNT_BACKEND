const { controller } = require('../../entrypoints/rest/concent-list-controller');

module.exports = router => {
    router.get('/getConcents', controller);
};
