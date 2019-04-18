const express = require('express');
const router = express.Router();

const api_category = require('./api/category');

router.post('/category/:name', api_category.create);


module.exports = router;
