const express = require("express");
const router = express.Router();
const app = express();
const path = require("path");

router.get("/", function (req: any, res: any) {
  res.sendFile(path.join(__dirname, "../public/form.html"));
});

module.exports = router;
