const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db-config");

class Game extends Model{
    // static getStaticFoo() {
    //   return 'foo';
    // }

    // getBar(){
    //     return "bar";
    // }

    // getFullGame(){
    //     return {
    //         name:this.name,
    //         genre:this.genre,
    //         developer:this.developer,
    //         releaseYear:this.releaseYear
    //     }
    // }
}

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        description:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        genre:{
            type: DataTypes.STRING,
            allowNull:false
        },
        developer:{
            type:DataTypes.STRING,
            allowNull:false
        },
        releaseYear:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        image:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        sequelize,
        modelName:'Game'
    }
)

// Game.sync({force:true});
// console.log(Game.getStaticFoo())
// let re4 = Game.build({
//     name:"RESIDENT EVIL 4",
//     genre:"HORROR/SHOOTER",
//     developer:"CAPCOM",
//     releaseYear:2004
// })
// console.log(re4.getBar());
// console.log(re4.getFullGame()); // 'bar'
module.exports = Game