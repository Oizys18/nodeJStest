import express from "express";
import path from "path";
const router = express.Router();

router.get("/", function (req: any, res: any) {
  res.sendFile(path.join(__dirname, "../public/form.html"));
});

module.exports = router;
