// model
const User = require("../models/user");

const getHome = (req, res) => {
  res.json("home page");
};

const getLogin = (req, res) => {
  res.json(" login page");
};

const postLogin = (req, res) => {
  let { password, email } = req.body;

  User.findOne({ email })
    .then((result) => {
      if (result) {
        if (password == result.password) {
          res.json("login success ");
        }
        res.json("password incorrect ");
      }
      res.json("email doesn't exist");
    })
    .catch((err) => console.log("error login", err.message));
};

module.exports = {
  getHome,
  getLogin,
  postLogin,
};
