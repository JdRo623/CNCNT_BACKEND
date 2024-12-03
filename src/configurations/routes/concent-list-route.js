const { controller } = require('../../entrypoints/rest/concept-list-controller');

module.exports = router => {
    router.get('/getConcents', controller);
};
