const { Category, Sequelize: {Op} } = require('../../../models');
const { Utils, Code } = require('../../../common');

const LOG_TAG = '[API-Category] ';

/**
 * create()
 * 
 * @param {*} req 
 * @param {*} res 
 * @method POST
 * @url [/category]
 * @dataparams name
 * @description 카테고리 생성
 */
const create = async (req, res) => {
    console.log(LOG_TAG + 'create (start)');
    
    console.log(LOG_TAG + 'req.params:: ', req.params);
    console.log(LOG_TAG + 'req.body:: ', req.body);
    
    const result = {};
    let isValid = false;
    
    // const categoryKey = req.body.key;
    const categoryName = req.body.name;
    let retObj = {};
    if(categoryName != null && categoryName != '') {
        var regType = /^[A-Za-z0-9+]*$/;
        if (regType.test(categoryName) && categoryName.length < 64) { 
            isValid = true;
        }
        else {
            retObj = Utils.makeErrorResult(
                Code.PARAM_INVALID_CATEGORY_NAME,
                'category name type error.'
                );
        }
    }
    else {
        retObj = Utils.makeErrorResult(
            Code.PARAM_EMPTY_CATEGORY_NAME,
            'category name is empty.'
            );
    } 

    if(isValid) {
        const insertInfo = await Category.create({
            name: categoryName
        });

        console.log(LOG_TAG + 'insertInfo:: ', insertInfo);
        
        res.status(201);
        retObj = Utils.makeSuccessResult({categoryId: insertInfo.dataValues.id});
    }
    else {
        res.status(501);
    }

    res.json(retObj);
    
    console.log(LOG_TAG + 'create (end)');
};

/**
 * list()
 * 
 * @param {*} req 
 * @param {*} res 
 * @method GET
 * @url [/category]
 * @dataparams 
 * @description 카테고리 리스트 조회
 */
const list = async (req, res) => {
    console.log(LOG_TAG + 'list (start)');    

    const categoryList = await Category.findAll({
        where: {deleted_at: { [Op.eq]: null} }
    });

    const categoryData = categoryList.map(list => list.dataValues);
    console.log('categoryData: ', categoryData);
    
    const retObj = Utils.makeSuccessResult({categories: categoryData});

    res.status(201).json(retObj);

    console.log(LOG_TAG + 'list (end)');
};

/**
 * detail()
 * 
 * @param {*} req 
 * @param {*} res 
 * @method GET
 * @url [/category/:categoryid]
 * @dataparams 
 * @description 카테고리 조회
 */
const detail = async (req, res) => {
    console.log(LOG_TAG + 'detail (start)');

    console.log(LOG_TAG + 'req.params:: ', req.params);
    console.log(LOG_TAG + 'req.body:: ', req.body);

    const id = req.params.categoryid;
    const categoryItem = await Category.findOne({
        where: {id, deleted_at: { [Op.eq]: null} }
    });

    console.log(LOG_TAG + 'get category Item:: ', categoryItem);

    if(categoryItem != null && categoryItem.dataValues != null) {
        res.status(201).json(Utils.makeSuccessResult({category: categoryItem.dataValues}));
    }
    else {
        res.status(401).json(Utils.makeErrorResult(Code.NOT_FOUND_CATEGORY, 'category is not exist.'));
    }    

    console.log(LOG_TAG + 'detail (end)');
};

/**
 * modify()
 * 
 * @param {*} req 
 * @param {*} res 
 * @method PUT
 * @url [/category/:categoryid]
 * @dataparams name
 * @description 카테고리 정보 변경
 */
const modify = async (req, res) => {
    console.log(LOG_TAG + 'modify (start)');

    console.log(LOG_TAG + 'req.params:: ', req.params);
    console.log(LOG_TAG + 'req.body:: ', req.body);

    const result = {};

    const categoryId = req.params.categoryid;
    const categoryName = req.body.name;
    

    const isExistCategory = await Category.findOne({
        where: {id: categoryId, deleted_at: { [Op.eq]: null} }
    });

    if(!isExistCategory) {
        res.status(404).json(Utils.makeErrorResult(Code.NOT_FOUND_CATEGORY, 'category is not exist.'));
        return res.status(404).json({result});
    }
    
    await Category.update( 
        { name: categoryName },
        { where: { id: categoryId } }
    );

    res.json(Utils.makeSuccessResult());

    console.log(LOG_TAG + 'modify (end)');
};

/**
 * destroy()
 * 
 * @param {*} req 
 * @param {*} res 
 * @method DELETE
 * @url [/category/:categoryid]
 * @dataparams 
 * @description 카테고리 삭제
 */
const destroy = async (req, res) => {
    console.log(LOG_TAG + 'destroy (start)');

    console.log(LOG_TAG + 'req.params:: ', req.params);
    console.log(LOG_TAG + 'req.body:: ', req.body);

    const id = req.params.categoryid;

    await Category.destroy({ where: {id} });

    // res.status(204).end();
    res.status(204).json(makeSuccessResult());

    console.log(LOG_TAG + 'destroy (end)');
};

module.exports = {
    create,
    list,
    detail,
    modify,
    destroy
};
