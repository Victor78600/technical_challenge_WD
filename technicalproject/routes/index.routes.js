const router = require("express").Router();
const jsondb = require("../../data/phones.json");
const Phone = require("./../models/Phone.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", (req, res, next) => {
  res.json(jsondb);
});

module.exports = router;
