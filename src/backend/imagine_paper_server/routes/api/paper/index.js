const { Paper, Category, Sequelize: {Op} } = require('../../../models');
const { Utils, Code } = require('../../../common');

const LOG_TAG = '[API-Paper] ';

const getCategoryItem = async (id) => {
    const categoryItem = await Category.findOne({
        where: {id, deleted_at: { [Op.eq]: null} }
    });

    if(categoryItem != null && categoryItem.dataValues != null) {
        return categoryItem.dataValues;
    }
    else {
        return null;
    }
}

const create = async (req, res) => {
    console.log(LOG_TAG + 'create (start)');
    
    console.log(LOG_TAG + 'req.params:: ', req.params);
    console.log(LOG_TAG + 'req.body:: ', req.body);

    const categoryId = req.body.category_id;

    console.log(LOG_TAG + 'categoryId:: ', categoryId);

    const categoryItem = await getCategoryItem(categoryId);

    console.log(LOG_TAG + 'categoryItem:: ', categoryItem);
    if(categoryItem == null) {
        res.status(501);
        res.json(Utils.makeErrorResult(Code.NOT_FOUND_CATEGORY, 'not found category'));
        return;
    }

    const { writer, category_id, title, contents } = req.body;
    const insertInfo = await Paper.create({
        writer, category_id, title, contents
    });

    console.log(LOG_TAG + 'insertInfo:: ', insertInfo);

    res.status(201).json(Utils.makeSuccessResult({paperId: insertInfo.dataValues.id}));

    console.log(LOG_TAG + 'create (end)');
};

const list = async (req, res) => {
    console.log(LOG_TAG + 'list (start)');
    
    console.log(LOG_TAG + 'req.params:: ', req.params);
    console.log(LOG_TAG + 'req.body:: ', req.body);

    

    console.log('categoryItem:: ', categoryItem);

    console.log(LOG_TAG + 'list (end)');
};

const detail = async (req, res) => {
    console.log(LOG_TAG + 'detail (start)');
    
    console.log(LOG_TAG + 'req.params:: ', req.params);
    console.log(LOG_TAG + 'req.body:: ', req.body);

    console.log(LOG_TAG + 'detail (end)');
};

const modify = async (req, res) => {
    console.log(LOG_TAG + 'modify (start)');
    
    console.log(LOG_TAG + 'req.params:: ', req.params);
    console.log(LOG_TAG + 'req.body:: ', req.body);

    console.log(LOG_TAG + 'modify (end)');
};

const destroy = async (req, res) => {
    console.log(LOG_TAG + 'destroy (start)');
    
    console.log(LOG_TAG + 'req.params:: ', req.params);
    console.log(LOG_TAG + 'req.body:: ', req.body);

    console.log(LOG_TAG + 'destroy (end)');
};


module.exports = {
    create,
    list,
    detail,
    modify,
    destroy
};

