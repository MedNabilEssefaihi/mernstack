const express = require("express");
const router = express.Router();
//controllers
const {
  getUsers,
  getAddPage,
  postAddUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userControllers");

router.get("/", getUsers);
//Add user
router.get("/add", getAddPage);
router.post("/add", postAddUser);
//User by ID
router.get("/:id", getUserById);
router.post("/:id", updateUserById);
router.delete("/:id", deleteUserById);

module.exports = router;
