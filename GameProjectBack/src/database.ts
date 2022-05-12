import { Sequelize } from "sequelize";
import keys from "./keys"; 

const sequelize = new Sequelize(keys.DB,keys.USER,keys.PASSWORD,{
    host:keys.HOST,
    dialect:"mysql",
    timezone: '-05:00',
});

export default sequelize;