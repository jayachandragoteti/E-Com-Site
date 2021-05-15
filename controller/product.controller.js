const productModel = require("../models/product.schema");

module.exports.getProducts = async (req, res) => {
  let products = await productModel.find({}); // query DB wait for the response to come
  return res.status(200).json({ success: true, data: products });
};

module.exports.addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      mrp,
      sp,
      category,
      images,
      highlights,
      ratings,
    } = req.body;
    if (!name)
      return res.status(400).json({ success: false, msg: "name is required" });

    // To do validate if proudct already exists
    /*const product = await findByName(name);

    if (product.length) {
      res.status(400).json({ success: false, msg: "Product already exists, try updating!" });
    }*/

    let productObj = new productModel({
      name,
      description,
      mrp,
      sp,
      category,
      images,
      highlights,
      ratings,
    });
    await productObj.save();

    return res.status(200).json({ success: true, msg: "product added" });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }
};
