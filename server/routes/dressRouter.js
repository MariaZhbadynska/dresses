const express = require("express");
const {
  getDresses,
  pushDress,
  deleteDress,
  getDress,
} = require("../controllers/dressesController");
const jsonParser = express.json();

const dressRouter = express.Router();

dressRouter.get("/", getDresses);
dressRouter.get("/:id", getDress);
dressRouter.post("/", jsonParser, pushDress);
dressRouter.delete("/:id", jsonParser, deleteDress);

module.exports = dressRouter;
