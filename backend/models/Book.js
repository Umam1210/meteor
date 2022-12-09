import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Books = db.define('books', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    desc: DataTypes.STRING,
    bookID: DataTypes.INTEGER
}, {
    freezeTableName: true
});

// Users.hasMany(Books);
// Books.belongsTo(Users, {foreignKey: 'userId'});

export default Books;
//  (async()=>{
//     await db.sync()
//  })()