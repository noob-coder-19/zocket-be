const mongoose = require("mongoose");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const campaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    default: 0,
  },
  desc: {
    type: String,
    default: `Created on ${new Date().getDate()} ${
      months[new Date().getMonth()]
    }`,
  },
  sdate: {
    type: String,
    required: true,
  },
  edate: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  imgLink: {
    type: String,
    default: "https://picsum.photos/300",
  },
  status: {
    type: String,
    default: "Live now",
  },
});

const Campaign = mongoose.model("Campaign", campaignSchema);

module.exports = Campaign;
