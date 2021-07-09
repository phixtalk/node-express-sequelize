var express = require("express");
const {
  get_landing,
  submit_lead,
  show_leads,
  show_lead,
  show_edit_lead,
  edit_lead,
  delete_lead,
} = require("../controllers/landing");
var router = express.Router();

/* GET home page. */
router.get("/", get_landing);
router.post("/", submit_lead);
router.get("/leads", show_leads);
router.get("/lead/:lead_id", show_lead);
router.get("/lead/:lead_id/edit", show_edit_lead);
router.post("/lead/:lead_id/edit", edit_lead);
router.post("/lead/:lead_id/delete", delete_lead);

module.exports = router;
