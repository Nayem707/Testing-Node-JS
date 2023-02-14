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

const getAllProducts = async (req, res) => {
  try {
    const allProduct = await Product.find(); // no use req.params or req.body just use find method !
    res.status(200).json({ allProduct });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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
