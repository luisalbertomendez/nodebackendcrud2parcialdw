import { Sequelize } from "sequelize";

const db = new Sequelize('database_app', 'root','Umg21188$', {
    host:'umb21188.cmuednxe64fb.us-east-1.rds.amazonaws.com', 
    dialect:'mysql'
})

export default db