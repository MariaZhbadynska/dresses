const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const colorSchema = new Schema({
  images: {
    type: [String], 
    required: true,
  }
});

const dressSchema = new Schema({
  id: {
    type: String,
  },
  type: {
    type: String,
    required: true,
    enum: ["newCollection", "gallery"],
  },
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  colors: {
    type: Map, 
    of: colorSchema,  
    required: true,
  }
});

const Dress = mongoose.model("dress", dressSchema);

module.exports = Dress;
