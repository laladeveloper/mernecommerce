const express = require("express");
const router = express.Router();

router.route("/").send("server is working")


module.exports = router;
