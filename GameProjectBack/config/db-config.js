const {Sequelize} = require("sequelize");
const sequelize = new Sequelize("game_app","root","",{
    host:"localhost",
    dialect:"mysql"
});

let test = async () =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log(`No se conecto ${error}`);
    }
}
test();
module.exports = sequelize;