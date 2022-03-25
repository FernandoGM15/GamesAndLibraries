const sequelize = require("./db-config");
const Game = require("./../models/Game");
const axios = require('axios').default;


sequelize.sync({alter:true});

let populate = async () => {
    try {
        for (let index = 9; index < 19; index++) {
            let req = await axios.get(`https://api.rawg.io/api/games/${index}?key=bcd365f817eb45f6b1c7187cd45d4378`)
            let res = req.data;
            let genre = (res.genres.length > 0) ? res.genres[0].name: "";
            let image = (res.background_image) ? res.background_image : "";
            let developer = (res.developers.length > 0) ? res.developers[0].name : "";
            let releaseYear = (res.released) ? res.released.substring(0, 4) : "1999";
            await Game.create({
                name: res.name,
                description: res.description,
                genre: genre,
                developer: developer,
                releaseYear: releaseYear,
                image: image
            });
        }
    } catch (error) {
        console.log(error);
    }
    
}
populate();