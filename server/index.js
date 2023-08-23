const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = 4001;

axios.default.baseURL = process.env.GOOGLE_MAPS_API_URL;

app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.json({
    data: "Joseph Maina",
  });
});

axios.defaults.baseURL = process.env.GOOGLE_MAPS_API_URL;

app.get("/api/address/:address", async (req, res) => {
  try {
    if (
      req.params.address === null ||
      req.params.address === "" ||
      req.params.address === "null"
    ) {
      return res.status(400).json({ error: "Invalid address input" });
    }

    const response = await axios.get("/place/autocomplete/json", {
      params: {
        input: req.params.address,
        types: "address",
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
    });

    res.status(200).json(response.data.predictions);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/distance/:pickup/:destination", async (req, res) => {
  try {
    const response = await axios.get("distancematrix/json", {
      params: {
        origins:req.params.pickup,
        destinations: req.params.destination,
        units: 'imperial',
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
    });

    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
