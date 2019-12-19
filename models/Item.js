const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, require: true },
  description: { type: String, require: true },
  image: { type: String, require: true }
});

module.exports = mongoose.model("Item", itemSchema);
