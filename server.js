const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/", (req, res) => {
  res.send("KCTF{ssrf_render_flag}");
});

app.get("/", (req, res) => {
  res.send("SSRF server is running");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
