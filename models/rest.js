const mongoose = require("mongoose");

const restSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  url: { type: String, match: /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i },
  orderName: { type: String, required: true, trim: true },
  typeFood: { type: String, required: true, trim: true },
  Describes: { type: String, required: true, trim: true }
});

module.exports = mongoose.model("Restaurant", restSchema);
