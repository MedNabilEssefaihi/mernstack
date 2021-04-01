const express = require("express");
const router = express.Router();

//controllers
const {
  getRapports,
  getPageRapport,
  postAddRapport,
  getRapportById,
  updateRapportById,
  deleteRapportById,
} = require("../controllers/rapportControllers");

router.get("/", getRapports);
// //Add user
router.get("/add", getPageRapport);
router.post("/add", postAddRapport);

// //User by ID
router.get("/:id", getRapportById);
router.post("/:id", updateRapportById);
router.delete("/:id", deleteRapportById);

module.exports = router;
