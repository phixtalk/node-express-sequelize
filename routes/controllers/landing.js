exports.get_landing = function (req, res, next) {
  res.render("index", { title: "Express" });
};

exports.submit_lead = function (req, res, next) {
  console.log("lead_email:", req.body.lead_email);
  res.redirect("/");
};
