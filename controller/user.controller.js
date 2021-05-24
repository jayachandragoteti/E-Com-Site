const userModel = require("../models/user.schema");
const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const secret = "iohiurfnvk";
const exclude = { password: 0, __v: 0 };

const findByEmail = (email) => userModel.find({ email: email });

module.exports.getUsers = async (req, res) => {
  let data = await userModel.find({}, exclude); // query DB wait for the response to come
  return res.status(200).json({ success: true, data: data });
};

module.exports.getUser = async (req, res) => {
  console.log(req.params.id);
  try {
    let data = await userModel.find({ _id: req.params.id }, exclude);
    if (data.length === 0) {
      return res.status(400).json({
        success: false,
        msg: `user cannot be found with id  ${req.params.id}`,
      });
    }
    return res.status(200).json({ success: true, msg: data });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }
};

module.exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!email) {
      return res
        .status(400)
        .json({ success: false, data: "email is required" });
    }

    // To do
    // 1. find user by email and throw 400 if user already exists
    const user = await findByEmail(email);
    console.log(user);
    if (user.length > 0) {
      return res
        .status(400)
        .json({ success: false, data: "email is already used!" });
    }
    // 2. Add user
    const hashPassword = bcrypt.hashSync(password, 8);
    let userObj = new userModel({ name, email, password: hashPassword });
    await userObj.save();

    res.status(200).json({ success: true, data: email });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, msg: error });
  }
};

// To do
module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const data = await findByEmail(email);

    if (!data.length) {
      return res
        .status(400)
        .json({ success: false, msg: `User Not found with email id ${email}` });
    }

    bcrypt.compare(password, data[0].password, (err, response) => {
      if (err) {
        throw err;
      }
      console.log(response);
      if (!response) {
        return res
          .status(400)
          .json({ success: false, msg: "password is invalid!" });
      }

      let token = jwt.sign({ email }, secret, { expiresIn: 10000 });
      return res.status(200).json({ success: true, msg: token });
    });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }
};
