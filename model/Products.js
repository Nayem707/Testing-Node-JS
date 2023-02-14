const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name provided!"],
  },
  price: {
    type: Number,
    required: [true, "product price must need!"],
  },
  featured: {
    type: Boolean,
    required: false,
  },
  rating: {
    type: Number,
    default: 2.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productsSchema);
