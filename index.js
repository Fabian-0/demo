require("dotenv").config();
const express = require("express");
const app = express();
const { static } = require("express");
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 8000;

app.listen(port, [host, "192.168.1.210"], () => {
  console.log(`Server is running on http://${host}:${port}`);
});

app.use(static("public"));