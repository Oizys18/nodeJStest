import { response } from "express";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./router/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, function () {
  console.log("3000 server on");
});
app.use(express.static("public"));
app.use(router);
