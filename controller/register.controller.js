const userModel = require("../models/user.schema");

module.exports.registerUser = (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ success: false, data: "email is required" });
  }

  res.status(200).json({ success: true, data: email });
};

module.exports.getUsers = async (req, res) => {
  let data = await userModel.find({}); // query DB wait for the response to come
  return res.status(200).json({ success: true, data: data });
};
