"use strict";

const mongoose = require("mongoose");
const express = require("express");
const http = require("http");

// 1. Create main express intance
const router = express();

// 2. Require routes
// const { router: bookRoutes } = require("./routes/books/bookRoutes");
const { router: exerciseRoutes } = require("./routes/exercises/exerciseRoutes");
const { router: userRoutes } = require("./routes/users/userRoutes");

// 3. Require conatants
const { URL, PORT } = require("./utils/constants");

// 4. Ensure that the router is using body parser to appropriately format incoming requests
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));
const { applyMiddleware } = require("./utils");
const middleWare = require("./middleware");
applyMiddleware(middleWare, router);

// 5. Utilise routes
router.use("/api/exercises", exerciseRoutes);
router.use("/api/users", userRoutes);

// 6. Create a server from express instance
const server = http.createServer(router);

// 7. Start server
mongoose
  .connect(URL, { useNewUrlParser: true })
  .then(async () => {
    console.log(`Connected to database at ${URL}`);
    server.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch(err => {
    console.error(err);
  });
