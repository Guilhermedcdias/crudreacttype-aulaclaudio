import { DataTypes } from "sequelize";
import { db } from "../db";

export const UserModel = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ra: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tel: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});
// Sincronizar uma vez somente para criar as tabelas no db e depois comentar
UserModel.sync();