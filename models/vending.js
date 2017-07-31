'use strict';
module.exports = function(sequelize, DataTypes) {
  var item = sequelize.define('item', {
    
    description: DataTypes.STRING,
    cost: DataTypes.FLOAT,
    quantity: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return item;
};