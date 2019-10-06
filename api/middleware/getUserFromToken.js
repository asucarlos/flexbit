"use strict";

const tokenService = require("../utils/tokenService");

module.exports = async (req, res, next) => {
  const headers = req.headers;

  if (!headers) {
    next(new Error("invalid request, please add header with your request"));
  } else {
    const authHeader = headers.authorization;

    if (!authHeader) {
      next(new Error("invalid request"));
    } else {
      try {
        const [prefix, token] = authHeader.split(" ");
        const decodedUser = await tokenService.decodeToken(token);
        if (decodedUser) {
          req.user = decodedUser;
          next();
        } else {
          next(new Error("you are not authorized"));
        }
      } catch (e) {
        console.error(e);
      }
    }
  }
};

// fetch('/', {
//   body: {
//     headers: {
//       'Authorization': 'Bearer token...'
//     }
//   }
// })
