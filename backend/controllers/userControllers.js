//package
const _ = require("lodash");

//model
const User = require("../models/user");

const getUsers = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`get user failed ${err.message}`));
};

const getAddPage = (req, res) => {
  // fs.readFile(path.resolve('..'))
};

const postAddUser = (req, res) => {
  let user = new User(req.body);

  user
    .save()
    .then(() => res.json("user added!"))
    .catch((err) => res.status(400).json(`add user failed ${err.message}`));
};

const getUserById = (req, res) => {
  let { id } = req.params;

  User.findById(id)
    .then((user) => (user ? res.json(user) : res.json("user doesn't exist")))
    .catch((err) => res.status(400).json(`add user failed ${err.message}`));
};

const updateUserById = (req, res) => {
  let { id } = req.params;

  User.findByIdAndUpdate(id, req.body, { new: true })
    .then(() => res.json(`user updated`))
    .catch((err) =>
      res.status(400).json(`user update it failed ${err.message}`)
    );
};

const deleteUserById = (req, res) => {
  let { id } = req.params;

  User.findByIdAndDelete(id)
    .then(() => res.json(`user deleted`))
    .catch((err) => res.status(400).json(`delete user failed ${err.message}`));
};

module.exports = {
  getUsers,
  getAddPage,
  postAddUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
