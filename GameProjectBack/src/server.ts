import express, {Application} from "express";
import morgan from "morgan";
import cors from "cors";
import GameRouter from "./routes/GameRouter";
import LibraryRouter from "./routes/LibraryRouter";
import GameLibraryRouter from "./routes/GameLibraryRouter";

class Server {

    public app: Application;

    public constructor(){
        this.app = express();
        this.config();
        this.routes();
        this.start();
    }

    private config():void{
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
    }

    private routes():void{
        this.app.use("/api/games", GameRouter);
        this.app.use("/api/libraries", LibraryRouter);
        this.app.use("/api/games-libraries",GameLibraryRouter);
    }

    private start() : void {
        this.app.listen(this.app.get('port'), () =>{
            console.log('Servidor en el puerto', this.app.get('port'));
        });
    }
}

const server = new Server();
