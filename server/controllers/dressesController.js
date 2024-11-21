const Dress = require("../models/dressModel");

const getDresses = async (req, res) => {
  const dresses = await Dress.find();
  res.json(dresses);
};
const getDress = async (req, res) => {
  const { id } = req.params;
  const dress = await Dress.findById(id);
  res.json(dress);
};
const pushDress = async (req, res) => {
  const { type, img, name, price, colors } = req.body;
  const dress = await Dress.create({ type, img, name, price, colors });
  res.json(dress);
};
const deleteDress = async (req, res) => {
  const { id } = req.params;
  const dress = await Dress.findByIdAndDelete(id);

  res.json(dress);
};

module.exports = {
  getDresses,
  getDress,
  pushDress,
  deleteDress,
};
