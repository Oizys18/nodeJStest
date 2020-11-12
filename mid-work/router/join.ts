import express from "express";
import path from "path";
const router = express.Router();
const mysql = require("mysql");
const DB_CREDENTIAL = require("../credential.json");
const connection = mysql.createConnection(DB_CREDENTIAL);
connection.connect();

router.get("/", function (req: any, res: any) {
  res.sendFile(path.join(__dirname, "../public/join.html"));
});

router.post("/", function (req: any, res: any) {
  const data = req.body.name;
  let responseData = {} as any;
  const sql = { name: data };
  const query = connection.query("insert into user set ?", sql, function (
    err: any,
    rows: any
  ) {
    if (err) throw err;
    console.log("ok insert");
    responseData.result = "ok";
    responseData.name = data;
    res.json(responseData);
  });
});
module.exports = router;
