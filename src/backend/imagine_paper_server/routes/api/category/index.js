const { category } = require('../../../models/category.js');

const LOG_TAG = '[API-Category] ';

const create = (req, res) => {
    console.log(LOG_TAG + 'create (start)');
    console.log('req.body = ', req.body);
    console.log('req.params = ', req.params);

    console.log(LOG_TAG + 'create (end)');
};

module.exports = {
    create
};
