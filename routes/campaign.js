const express = require("express");
const router = express.Router();

const {
  getAllCampaigns,
  createCampaign,
  deleteCampaign,
} = require("../controllers/CampaignController");

router.get("/", getAllCampaigns);
router.post("/", createCampaign);
router.delete("/:id", deleteCampaign);

module.exports = router;
