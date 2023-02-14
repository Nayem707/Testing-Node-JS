const Product = require("../model/Products");

const createProduct = async (req, res) => {
  const product = req.body;
  try {
    await Product.create(product);
    res.status(201).json("Product crated!");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllProducts = (req, res) => {
  res.send({ msg: "hello all products" });
};

const getAllProductsStatic = async (req, res) => {
  try {
    const product = await Product.find({ name: true });
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  createProduct,
  getAllProductsStatic,
  getAllProducts,
};
