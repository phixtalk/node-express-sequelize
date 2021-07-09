var express = require("express");
const { get_landing, submit_lead } = require("../controllers/landing");
var router = express.Router();

/* GET home page. */
router.get("/", get_landing);
router.post("/", submit_lead);

module.exports = router;
