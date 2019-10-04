const jwt = require("jsonwebtoken");
const { SECRET } = require("./constants");

exports.issueToken = async userData => {
  const { _id: id } = userData;

  const payload = {
    user: {
      id
    }
  };

  return jwt.sign(payload, SECRET);
};

// verify tokens
exports.verifyToken = async token => {
  return jwt.verify(token, SECRET);
};

// create method to decode
exports.decodeToken = async token => {
  return jwt.decode(token, SECRET);
};
