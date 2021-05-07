"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product, Cart, Review }) {
      // define association here
      this.belongsToMany(Product, { through: { Cart, unique: false } });
      this.hasMany(Cart);
      this.hasMany(Review);
    }
    /** THIS METHOD INSIDE THE MODEL CONSTRUCTOR 
     * is to avoid send the id serial coz client 
     * don't ned to know how many records i have in mi DB. 
     
     * toJSON(){
      return {...this.get(), id: undefined}
    }  
    +*/
  }
  User.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      role: { type: DataTypes.STRING, allowNull: false },
      img: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
    }
  );
  return User;
};
