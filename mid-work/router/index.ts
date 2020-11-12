import express from "express";
const app = express();
import path from "path";
const main = require("./main");
const text = require("./text");
const join = require("./join");
const router = express.Router();

router.get("/", function (req: any, res: any) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
router.use("/main", main);
router.use("/text_post", text);
router.use("/join", join);
module.exports = router;
