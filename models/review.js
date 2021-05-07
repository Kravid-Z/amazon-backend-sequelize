"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Product }) {
      // define association here
      this.belongsTo(User);
      this.belongsTo(Product)
    }
  }
  Review.init(
    {
      comment: { type: DataTypes.STRING, allowNull: false },
      rate: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      tableName: "reviews",
      modelName: "Review",
    }
  );
  return Review;
};
