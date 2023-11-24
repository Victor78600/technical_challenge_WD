const router = require("express").Router();
const jsondb = require("../../data/phones.json")

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", (req, res, next) => {
  res.json(jsondb);
  console.log(1)
});

router.get("/phones/:id",async (req, res, next) => {
    const { id } = req.params;
    try {
      const onePhone = await jsondb.findOne({ id: id });
      res.json(onePhone);
    } catch (error) {
      next(error);
    }
  });


module.exports = router;
