import express from "express";
const router = express.Router();
const mysql = require("mysql");
const DB_CREDENTIAL = require("../credential.json");
const connection = mysql.createConnection(DB_CREDENTIAL);
connection.connect();

router.post("/", function (req: any, res: any) {
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
module.exports = router;
