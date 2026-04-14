const express = require("express");
const router = express.Router();
const internController = require("../controllers/internController");

router.post("/", internController.createIntern);
router.get("/", internController.getAllInterns);
router.put("/:email", internController.updateInternAge);

router.get("/age/above20", internController.getInternsAbove20);
router.get("/department/engineering", internController.getEngineeringInterns);
router.get("/age/range", internController.getInternsAgeRange);
router.get("/count", internController.countInterns);
router.get("/age/average", internController.averageInternAge);
router.get("/age/max", internController.maxInternAge);
module.exports = router;