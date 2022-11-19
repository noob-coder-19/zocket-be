require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoConn = require("./config/mongoConn");
const corsOptions = require("./config/corsOptions");
const credentials = require("./middleware/credentials");
const app = express();

mongoConn();

app.use(credentials);
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/products", require("./routes/product"));
app.use("/api/campaigns", require("./routes/campaign"));

app.get("*", (req, res) => {
  res.status(404).json({ message: "Route not found." });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
