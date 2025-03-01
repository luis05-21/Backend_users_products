import { DataTypes } from "sequelize";
import { Database } from "../../database/db.js";

const database = new Database();
const Users = database.db.define("Users", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Users.sync();

export default Users;