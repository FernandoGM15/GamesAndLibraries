import Game from "./Game";
import Library from "./Library";
import GameLibrary from "./GameLibrary";

const dbInit = () => {
    Game.sync();
    Library.sync();
    GameLibrary.sync();
}

dbInit();