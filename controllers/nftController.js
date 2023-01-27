const Nft = require('../models/nftModel');
const base = require('./baseController');
const scripts= require('../controllers/scripts/runScript')


exports.getAllNft = base.getAll(Nft);
exports.getNftByCatagories = base.getByCatagories(Nft);
exports.getNft = base.getOne(Nft);
exports.updateNft = base.updateOne(Nft);
exports.createNft = base.createOne(Nft);
exports.putdatabase = scripts.runScript(Nft);
