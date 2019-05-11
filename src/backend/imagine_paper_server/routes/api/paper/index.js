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
    
    const retObj = Utils.makeSuccessResult({paperList: paperData});

    res.status(201).json(retObj);

    console.log(LOG_TAG + 'list (end)');
};

const detail = async (req, res) => {
    console.log(LOG_TAG + 'detail (start)');
    
    console.log(LOG_TAG + 'req.params:: ', req.params);
    console.log(LOG_TAG + 'req.body:: ', req.body);

    const paperId = req.params.paperid;
    const paperItem = await Paper.findOne({
        where: {id: paperId, deleted_at: { [Op.eq]: null} }
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

    const paperId = req.params.paperid;
    const isExistPaper = await Paper.findOne({
        where: {id: paperId, deleted_at: { [Op.eq]: null} }
    });

    if(!isExistPaper) {
        res.status(404).json(Utils.makeErrorResult(Code.NOT_FOUND_PAPER, 'paper is not exist.'));
        return;
    }

    const title = req.body.title;
    const contents = req.body.contents;
    const updatePaperData = {};
    if(title != null && title.length > 0) {
        updatePaperData.title = title;
    }
    if(contents != null && contents.length > 0) {
        updatePaperData.contents = contents;
    }
    
    await Paper.update( updatePaperData, { where: { id: paperId } } );

    res.json(Utils.makeSuccessResult());

    console.log(LOG_TAG + 'modify (end)');
};

const destroy = async (req, res) => {
    console.log(LOG_TAG + 'destroy (start)');
    
    console.log(LOG_TAG + 'req.params:: ', req.params);
    console.log(LOG_TAG + 'req.body:: ', req.body);

    const id = req.params.paperid;

    await Paper.destroy({ where: {id} });

    // res.status(204).end();
    res.status(204).json(makeSuccessResult());

    console.log(LOG_TAG + 'destroy (end)');
};

const mainList = async (_) => {
    console.log(LOG_TAG + 'mainList (start)');

    console.log(LOG_TAG + 'req.params:: ', req.params);
    console.log(LOG_TAG + 'req.body:: ', req.body);

    let mainListObj = {};
    
    const mostLikePaper = await Paper.findOne({ 
        where: {deleted_at: { [Op.eq]: null} },
        order: [['like', 'DESC']]
    });

    const latestPaper = await Paper.findOne({ 
        where: {deleted_at: { [Op.eq]: null} },
        order: [['id', 'DESC'], ['created_at', 'DESC']]
    });

    mainListObj.like = mostLikePaper.dataValues || 'null';
    mainListObj.lates = latestPaper.dataValues || 'null';

    res.status(201).json(Utils.makeSuccessResult({mainpaper: mainListObj}));

    console.log(LOG_TAG + 'mainList (end)');
};

const likeList = async (_) => {
    console.log(LOG_TAG + 'likeList (start)');

    console.log(LOG_TAG + 'req.params:: ', req.params);
    console.log(LOG_TAG + 'req.body:: ', req.body);

    const mostLikePaperList = await Paper.findAll({ 
        where: {deleted_at: { [Op.eq]: null} },
        order: [['like', 'DESC']],
        limit: 5
    });

    const paperData = mostLikePaperList.map(list => list.dataValues);
    console.log('paperData: ', paperData);
    
    const retObj = Utils.makeSuccessResult({paperList: paperData});

    res.status(201).json(retObj);    

    console.log(LOG_TAG + 'likeList (end)');
};

const latestList = async (_) => {
    console.log(LOG_TAG + 'latestList (start)');

    console.log(LOG_TAG + 'req.params:: ', req.params);
    console.log(LOG_TAG + 'req.body:: ', req.body);

    const latestPaperList = await Paper.findAll({ 
        where: {deleted_at: { [Op.eq]: null} },
        order: [['id', 'DESC'], ['created_at', 'DESC']], 
        limit: 5
    });

    const paperData = latestPaperList.map(list => list.dataValues);
    console.log('paperData: ', paperData);
    
    const retObj = Utils.makeSuccessResult({paperList: paperData});

    res.status(201).json(retObj);

    console.log(LOG_TAG + 'latestList (end)');
};

module.exports = {
    create,
    list,
    detail,
    modify,
    destroy,

    mainList,
    likeList,
    latestList
};

