'use strict';

// const {
//   Model
// } = require('sequelize');
import { Model, InferAttributes, InferCreationAttributes } from 'sequelize';

// interface ImageAttributes {
//   fileName: string,
//   fileSize: number,
//   width: number,
//   height: number,
//   uploaded: Date,
//   sourceIp: string,
//   description: string
// }

module.exports = (sequelize: any, DataTypes: any) => {
  class Images extends Model<InferAttributes<Images>, InferCreationAttributes<Images>> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
  fileName!: string
  fileSize!: number
  width!: number
  height!: number
  uploaded!: Date
  sourceIp!: string
  description!: string
    static associate(models: any) {
      // define association here
    }
  }
  Images.init({
    fileName: {type: DataTypes.STRING},
    fileSize: {type: DataTypes.INTEGER},
    width: {type: DataTypes.INTEGER},
    height: {type: DataTypes.INTEGER},
    uploaded: {type: DataTypes.DATE},
    sourceIp: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'Images',
  });
  return Images;
};