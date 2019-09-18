const bodyParser = require("body-parser");

exports.handleBodyRequestParsing = router => {
  console.log("router:", router);
  router.use(bodyParser.urlencoded({ extended: true }));
  router.use(bodyParser.json());
};
