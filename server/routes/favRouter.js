const express = require("express");
const {
  getFavs,
  pushFav,
  deleteFav,
  getFav,
} = require("../controllers/FavsController");
const jsonParser = express.json();

const dressRouter = express.Router();

dressRouter.get("/", getFavs);
dressRouter.get("/:id", getFav);
dressRouter.post("/", jsonParser, pushFav);
dressRouter.delete("/:id", jsonParser, deleteFav);

module.exports = dressRouter;
