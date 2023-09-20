// importamos la conexión a la db
import db from "../database/db.js";

// importamos sequilize
import { DataTypes } from "sequelize";

const BlogModel = db. define('blogs', {
    title: {type: DataTypes. STRING}, 
    content: {type: DataTypes. STRING}, 
});

export default BlogModel