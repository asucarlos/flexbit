const bodyParser = require("body-parser");

exports.handleBodyRequestParsing = router => {
  console.log("hi");
  router.use(bodyParser.urlencoded({ extended: true }));
  router.use(bodyParser.json());
};

// currently not using this
exports.requireEditor = (req, res, next) => {
  if (req.user.role !== "owner") {
    res.status(401).send("Must be an editor to create posts");
  } else {
    next();
  }
};
