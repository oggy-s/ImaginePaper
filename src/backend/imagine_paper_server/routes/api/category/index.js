const { Category } = require('../../../models');

const LOG_TAG = '[API-Category] ';

const create = async (req, res) => {
    console.log(LOG_TAG + 'create (start)');
    console.log('req.body = ', req.body);
    console.log('req.params = ', req.params);

    const result = {};
    let isValid = false;
    const categoryName = req.params.name;
    if(categoryName != null && categoryName != '') {
        var regType = /^[A-Za-z0-9+]*$/;
        if (regType.test(categoryName)) { 
            isValid = true;
            
            result.code = 1;
            result.reason = 'success';
        }
        else {
            result.code = -1;
            result.reason = 'category name type error.';
        }
    }
    else {
        result.code = -2;
        result.reason = 'category name is empty.';
    } 

    result.result = isValid;

    if(isValid) {
        await Category.create({
            name: req.params.name
        });
        
        res.status(201);
    }
    else {
        res.status(501);
    }

    res.json(result);
    
    console.log(LOG_TAG + 'create (end)');
};

module.exports = {
    create
};
