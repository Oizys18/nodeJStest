import express from "express";
const router = express.Router();
import path from "path";

router.get("/", function (req: any, res: any) {
  res.sendFile(path.join(__dirname, "../public/form.html"));
});

module.exports = router;
