const express = require("express");
const router = express.Router();

router.get("/generate", async (req, res) => {
  const story = "Once upon a time in the AI learning world...";
  res.json({ story });
});

module.exports = router;
