"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Cart, User, Category, Review}) {
      // define association here
      this.hasMany(Cart)
      this.hasMany(User)
      this.hasMany(Review)
      this.belongsTo(Category)
    }
  }
  Product.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      decription: { type: DataTypes.STRING, allowNull: false },
      brand: { type: DataTypes.STRING, allowNull: false },
      imgURL: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      tableName: "products",
      modelName: "Product",
    }
  );
  return Product;
};
