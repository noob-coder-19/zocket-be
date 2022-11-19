const Campaign = require("../models/Campaign");

const getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCampaign = async (req, res) => {
  const campaign = new Campaign({
    name: req.body.name,
    clicks: req.body.clicks,
    desc: req.body.desc,
    sdate: req.body.sdate,
    edate: req.body.edate,
    budget: req.body.budget,
    location: req.body.location,
    platform: req.body.platform,
    imgLink: req.body.imgLink,
    status: req.body.status,
  });

  try {
    const newCampaign = await campaign.save();
    res.status(201).json(newCampaign);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (campaign == null) {
      return res.status(404).json({ message: "Cannot find campaign" });
    }
    await campaign.remove();
    res.json({ message: "Deleted Campaign" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllCampaigns, createCampaign, deleteCampaign };
