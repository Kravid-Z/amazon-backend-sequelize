const express = require("express");
// const cartsRoute = require("./carts/index.js");
const usersRoute = require("./users/index.js");
const categoriesRoute = require("./categories/index.js");
const reviewsRoute = require("./reviews/index.js");
const productsRoute = require("./products/index.js");

const router = express.Router();

// router.use("/carts", cartsRoute);
router.use("/users", usersRoute);
router.use("/categories", categoriesRoute);
router.use("/reviews", reviewsRoute);
router.use("/products", productsRoute);

module.exports = router;
