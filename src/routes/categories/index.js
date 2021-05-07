const express = require("express");
const Category = require("../../../models").Category;
const Product = require("../../../models").Product;
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const categories = await Category.findAll({ include: Product });
      res.status(200).send(categories);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const category = await Category.create(req.body);
      res.status(200).send(category);
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

router.route("/createAll").post(async (req, res, next) => {
  try {
    const data = await Category.bulkCreate(req.body.data);
    res.status(200).send(data);
  } catch (e) {
    console.log(e);
  }
});

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const category = await Category.findByPk(req.params.id);
      res.status(200).send(category);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .put(async (req, res, next) => {
    try {
      const category = await Category.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });
      res.status(200).send({ msgg: "Succesfully edited", category });
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const rows = await Category.destroy({ where: { id: req.params.id } });
      if (rows > 0) {
        res.status(204).send();
      } else {
        res.status(404).send("Not found");
      }
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

module.exports = router;
