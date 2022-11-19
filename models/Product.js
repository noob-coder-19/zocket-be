const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imgLink: {
    type: String,
    default: "https://picsum.photos/seed/picsum/200/300",
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
