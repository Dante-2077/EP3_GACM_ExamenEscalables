import express, { type Application } from 'express';
import cors from 'cors';
import notaRoutes from '../routes/notas.routes.ts';
import { dbConnection } from '../database/config.ts';

export class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        notas: '/api/notas'
    };

    constructor(){
        this.app = express();
        this.port = process.env.PORT || "8081";

        this.conectarDB();

        this.middlewares();
        this.routes();
    }

    private middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    private routes(){
        this.app.use(this.apiPaths.notas, notaRoutes);
    }

    public listen(){
        this.app.listen(Number(this.port), () => {
            console.log("Server escuchando en el puerto " + this.port);
        });
    }

    private async conectarDB(){
        await dbConnection();
    }
}
