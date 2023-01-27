const mongoose = require("mongoose");


const nftSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  image:{
    type: String,
    trim: true,
  },
  description:{
    type: String,
    trim: true,
  },
  hash: {
    type: String,
    trim: true
  },
  attributes:{
    type:Array(Object)
  },
  categories:{
    type: Number       // 1->"Main", 2->"First", 3->"ChosenOne",4->"Ambassdors"
  },
  saleStatus: {
    type: Boolean,
    default: false
  },
});


const Nft = mongoose.model("Nft", nftSchema);
module.exports = Nft;
