const express = require('express');
const router = express.Router();
const nftController = require('../controllers/nftController');
// const authController = require('./../controllers/authController');


router
    .route('/')
    .get(nftController.getAllNft);

router
    .route('/createOne')
    .post(nftController.createNft);
router
    .route('/createAll')
    .post(nftController.putdatabase);

router
    .route('/getNftByCatagories')
    .get(nftController.getNftByCatagories)

router
    .route('/:id')
    .get(nftController.getNft)
    .patch(nftController.updateNft)

module.exports = router;