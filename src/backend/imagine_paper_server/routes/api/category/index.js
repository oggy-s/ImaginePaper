const { Category } = require('../../../models');

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

    if(categoryName != null && categoryName != '') {
        var regType = /^[A-Za-z0-9+]*$/;
        if (regType.test(categoryName) && categoryName.length < 64) { 
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
        const insertInfo = await Category.create({
            name: categoryName
        });

        console.log(LOG_TAG + 'insertInfo:: ', insertInfo);
        
        res.status(201);
    }
    else {
        res.status(501);
    }

    res.json({result});
    
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

    const result = {
        code: 1,
        reason: 'success',
        result: true  
    };

    const categoryList = await Category.findAll({
        where: {deleted_at: { $ne: null }}
    });

    const categoryData = categoryList.map(list => list.dataValues);
    console.log('categoryData: ', categoryData);

    res.status(201).json({ result, categories: categoryData });

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

    const result = {};
    const id = req.params.categoryid;
    const categoryItem = await Category.findOne({
        where: {id, deleted_at: { $ne: null }}
    });

    console.log(LOG_TAG + 'get category Item:: ', categoryItem);

    if(categoryItem != null && categoryItem.dataValues != null) {
        result.code = 1;
        result.reason = 'success';
        result.result = true;

        res.status(201).json({ result, category: categoryItem.dataValues });
    }
    else {
        result.code = -3;
        result.reason = 'category is not exist.';
        result.result = false;
        res.status(401).json({result});
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
        where: {id: categoryId, deleted_at: { $ne: null }} 
    });

    if(!isExistCategory) {
        result.code = -3;
        result.reason = 'category is not exist.';
        result.result = false;    
        return res.status(404).json({result});
    }
    
    await Category.update( 
        { name: categoryName },
        { where: { id: categoryId } }
    );

    result.code = 1;
    result.reason = 'success';
    result.result = true;

    res.json(result);

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

    res.status(204).end();

    console.log(LOG_TAG + 'destroy (end)');
};

module.exports = {
    create,
    list,
    detail,
    modify,
    destroy
};
