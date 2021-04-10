const { Router } = require("express");
const router = Router();

//controllers
const {
  getHome,
  getLogin,
  postLogin,
} = require("../controllers/authControllers");

//home
router.get("/", getHome);
//login
router.get("/login", getLogin);
router.post("/login", postLogin);

module.exports = router;
