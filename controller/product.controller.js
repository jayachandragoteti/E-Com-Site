const productModel = require("../models/product.schema");
const CategoryModel = require("../models/category.schema");

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

//  get single product
module.exports.getSingleProduct = async (req,res) => {
  try {
    let product = await productModel.findById(req.params.id);
    return res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }

}
// add Category
module.exports.addCategory = async (req, res) => {
  try {
    const {
      name
    } = req.body;
    if (!name)
      return res.status(400).json({ success: false, msg: "name is required" });
    let CategoryObj = new CategoryModel({
      name
    });
    await CategoryObj.save();

    return res.status(200).json({ success: true, msg: "Category added" });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }
};
// Get Category
module.exports.getCategory = async (req, res) => {
  let Category = await CategoryModel.find({}); // query DB wait for the response to come
  return res.status(200).json({ success: true, data: Category });
};
// Get Single Category
module.exports.getSingleCategory = async (req,res) => {
  try {
    let Category = await  CategoryModel.findById(req.params.id);
    return res.status(200).json({ success: true, data: Category });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }

}