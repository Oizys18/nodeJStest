const express = require("express");
const app = express();
const router = express.Router();

app.get("/", function (req: any, res: any) {
  console.log("main");
  res.sendFile(__dirname + "/public/form.html");
});
