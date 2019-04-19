const express = require('express');
const router = express.Router();

const api_category = require('./api/category');

router.post('/category', api_category.create);
router.get('/category', api_category.list);
router.get('/category/:categoryid', api_category.detail);
router.put('/category/:categoryid', api_category.modify);
router.delete('/category/:categoryid', api_category.destroy);

module.exports = router;
