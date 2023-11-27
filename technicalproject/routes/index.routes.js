const router = require("express").Router();
const jsondb = require("../../data/phones.json");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", (req, res, next) => {
  res.json(jsondb);
});

// router.get("/phones/:id", async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const onePhone = await jsondb.findOne({id: id})
//     console.log({id: id })
//     res.json(onePhone);
//   } catch (error) {
//     next(error);
//   }
// });

router.get('/phones/:id', (req, res) => {
  const phoneId = req.params.id;
const phone = jsondb.find((element) => element.id === parseInt(phoneId));
  if (phone) {
    res.json(phone); // Return details of the specified phone
  } else {
    res.status(404).json({ error: 'Phone not found' });
  }
});


module.exports = router;
