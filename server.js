const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    return res.status(400).send("Missing url parameter");
  }

  try {
    const response = await axios.get(targetUrl);
    res.send(response.data);
  } catch (err) {
    res.status(500).send("Request failed: " + err.message);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("SSRF relay server running");
});
