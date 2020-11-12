import { response } from "express";
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();
const DB_CREDENTIAL = require("./credential.json");
const main = require("./router/main");

const connection = mysql.createConnection(DB_CREDENTIAL);
connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, function () {
  console.log("3000 server on");
});
app.use(express.static("public"));

app.use("/", main);

app.post("/text_post", function (req: any, res: any) {
  const text: string = req.body.text;
  let responseData = {} as any;

  const query: any = connection.query(
    'select name from user where _id="' + text + '"',
    function (err: any, rows: any) {
      if (err) throw err;
      if (rows[0]) {
        responseData.result = "ok";
        responseData.name = rows[0].name;
      } else {
        responseData.result = "none";
        responseData.name = "";
      }
      res.json(responseData);
    }
  );
});
