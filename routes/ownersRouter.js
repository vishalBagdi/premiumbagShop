const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    let owner = await ownerModel.find();
    if (owner.length > 0) {
      return res
        .status(503)
        .send("you do not have permission to create a new owner");
    }
    let { fullname, email, password} = req.body;
    await ownerModel.create({

      fullname,
      email,
      password

    })
    res.send("we can create a new owner account");
  });
}

router.get("/", function (req, res) {
  res.send("hey it is working with fine");
});

module.exports = router;
