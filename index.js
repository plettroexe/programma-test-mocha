const express = require("express");
const http = require("http");
const app = express();
const path = require("path");

app.use("/", express.static(path.join(__dirname, "public")));

const server = http.createServer(app);
server.listen(80, () => {
  console.log("- server running");
});
