import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Books from "./Book.js";
import Users from "./UserModel.js";
// import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const UserBook = db.define('userbooks', {
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
}, {
    freezeTableName: true
});

Users.hasMany(UserBook,{foreignKey: 'userId'});
Books.hasMany(UserBook,{foreignKey: 'bookId'});


export default UserBook;
