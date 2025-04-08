const express = require("express");
const router = express.Router();
const { HOME_LINK } = require("../constants/navigation");

router.post("/", (req, res) => {
  res.render("killed", {
    headTitle: "Session Ended",
    path: "/kill",
    menuLinks: [HOME_LINK],
    activeLinkPath: "/kill"
  });
});

module.exports = router;
