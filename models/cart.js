"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Product }) {
      //<--- HERE destructuring model
      // define association here
      this.belongsTo(User);
      this.belongsTo(Product);
    }
  }
  Cart.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
    },
    {
      sequelize,
      tableName: "carts",
      modelName: "Cart",
    }
  );
  return Cart;
};
