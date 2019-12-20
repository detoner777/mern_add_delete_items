const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
const Mongoose = require("mongoose");

router.put("/item/:id", (req, res, next) => {
  console.log(req.body);
  console.log(req.params.id);
  let updatedItem = Item.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        description: req.body.description,
        amount: req.body.amount,
        image: req.body.image
      }
    },
    (err, item) => {
      if (err) {
        res.status(400).json({
          message: "The Item was not saved",
          errorMessage: err.message
        });
      } else {
        res.status(200).json({
          message: "Item was updated successfully",
          item: item
        });
      }
    }
  );
});

router.delete("/item/:id", (req, res, next) => {
  let id = req.body.id;
  console.log(id);

  let itemToDelete = Item.deleteOne({ _id: id }, err => {
    if (err) {
      res.status(404).json({
        message: "Item was not found"
      });
    } else {
      res.status(200).json({
        message: "Item was deleted successfully"
      });
    }
  });
});

module.exports = router;
