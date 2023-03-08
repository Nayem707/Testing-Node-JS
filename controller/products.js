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
    const products = await Product.find(); // no use req.params or req.body just use find method !
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllProductsStatic = async (req, res) => {
  try {
    const { id: username } = req.params;
    const product = await Product.findOne({ name: username });
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
