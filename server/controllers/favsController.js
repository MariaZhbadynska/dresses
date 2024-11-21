const Fav = require("../models/favsModel");

const getFavs = async (req, res) => {
  const favs = await Fav.find();
  res.json(favs);
};
const getFav = async (req, res) => {
  const { id } = req.params;
  const fav = await Fav.findById(id);
  res.json(fav);
};
const pushFav = async (req, res) => {
  const { type, img, name, price, colors } = req.body;
  const fav = await Fav.create({ type, img, name, price, colors });
  res.json(fav);
};
const deleteFav = async (req, res) => {
  const { id } = req.params;
  const fav = await Fav.findByIdAndDelete(id);

  res.json(fav);
};

module.exports = {
  getFavs,
  getFav,
  pushFav,
  deleteFav,
};
