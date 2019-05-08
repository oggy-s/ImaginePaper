const express = require('express');
const router = express.Router();

////////////////////////////////////////////////////////////
// category
const api_category = require('./api/category');

const API_TAG = '/imgp/api';

router.post(API_TAG + '/category', api_category.create);
router.get(API_TAG + '/category', api_category.list);
router.get(API_TAG + '/category/:categoryid', api_category.detail);
router.put(API_TAG + '/category/:categoryid', api_category.modify);
router.delete(API_TAG + '/category/:categoryid', api_category.destroy);

////////////////////////////////////////////////////////////
// paper
const api_paper = require('./api/paper');
router.post(API_TAG + '/paper', api_paper.create);
router.get(API_TAG + '/paper/:paperid', api_paper.detail);
router.put(API_TAG + '/paper/:paperid', api_paper.modify);
router.delete(API_TAG + '/paper/:paperid', api_paper.destroy);

router.get(API_TAG + '/more-paper/:categoryid', api_paper.list);
router.get(API_TAG + '/main-paper', api_paper.mainList);
router.get(API_TAG + '/like-paper', api_paper.likeList);
router.get(API_TAG + '/latest-paper', api_paper.latestList);

module.exports = router;
