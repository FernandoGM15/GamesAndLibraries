import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes
} from "sequelize";
import sequelize from "../database";

class Library extends Model<
  InferAttributes<Library>,
  InferCreationAttributes<Library>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Library.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE
  },
  {
    sequelize,
    tableName: "libraries",
    timestamps:true
  }
);

export default Library;
