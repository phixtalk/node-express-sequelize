const models = require("../models");

exports.show_login = function (req, res, next) {
  res.render("user/login", { formData: {}, error: {} });
};

exports.show_signup = function (req, res, next) {
  res.render("user/signup", { formData: {}, error: {} });
};

exports.login = function (req, res, next) {};

exports.signup = function (req, res, next) {};
