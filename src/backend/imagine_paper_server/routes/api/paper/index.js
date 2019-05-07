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

    const categoryId = req.body.categoryId;

    console.log(LOG_TAG + 'categoryId:: ', categoryId);

    const categoryItem = await getCategoryItem(categoryId);

    console.log(LOG_TAG + 'categoryItem:: ', categoryItem);
    if(categoryItem == null) {
        res.status(501);
        res.json(Utils.makeErrorResult(Code.NOT_FOUND_CATEGORY, 'not found category'));
        return;
    }

    const { writer, title, contents } = req.body;
    const insertInfo = await Paper.create({
        writer, categoryId, title, contents
    });

    console.log(LOG_TAG + 'insertInfo:: ', insertInfo);

    res.status(201).json(Utils.makeSuccessResult({paperId: insertInfo.dataValues.id}));

    console.log(LOG_TAG + 'create (end)');
};

const list = async (req, res) => {
    console.log(LOG_TAG + 'list (start)');
    
    console.log(LOG_TAG + 'req.params:: ', req.params);
    console.log(LOG_TAG + 'req.body:: ', req.body);

    const categoryId = req.params.categoryid;
    const categoryItem = await getCategoryItem(categoryId);

    console.log(LOG_TAG + 'categoryItem:: ', categoryItem);
    if(categoryItem == null) {
        res.status(501);
        res.json(Utils.makeErrorResult(Code.NOT_FOUND_CATEGORY, 'not found category'));
        return;
    }

    const paperList = await Paper.findAll({
        where: {category_id: categoryId, deleted_at: { [Op.eq]: null} }
    });

    const paperData = paperList.map(list => list.dataValues);
    console.log('paperData: ', paperData);
    
    const retObj = Utils.makeSuccessResult({papers: paperData});

    res.status(201).json(retObj);

    console.log(LOG_TAG + 'list (end)');
};

const detail = async (req, res) => {
    console.log(LOG_TAG + 'detail (start)');
    
    console.log(LOG_TAG + 'req.params:: ', req.params);
    console.log(LOG_TAG + 'req.body:: ', req.body);

    const categoryId = req.params.categoryid;
    const categoryItem = await getCategoryItem(categoryId);

    console.log(LOG_TAG + 'categoryItem:: ', categoryItem);
    if(categoryItem == null) {
        res.status(501);
        res.json(Utils.makeErrorResult(Code.NOT_FOUND_CATEGORY, 'not found category'));
        return;
    }


    const paperId = req.params.paperid;
    const paperItem = await Paper.findOne({
        where: {id: paperId, category_id: categoryId, deleted_at: { [Op.eq]: null} }
    });

    console.log(LOG_TAG + 'get paper Item:: ', paperItem);

    if(paperItem != null && paperItem.dataValues != null) {
        res.status(201).json(Utils.makeSuccessResult({paper: paperItem.dataValues}));
    }
    else {
        res.status(401).json(Utils.makeErrorResult(Code.NOT_FOUND_PAPER, 'paper item is not exist.'));
    } 
    
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

