"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        // NOTE: configuramos app (para que se ejecuten los metodos config() + routes()) para despues iniciarlo con server.start():
        this.config();
        this.routes();
    }
    config() {
        // NOTE: metodo para configurar las caracteristicas de mi servidor, puerto, direccion, etc.
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false })); // NOTE: info enviar en caso de formularios
    }
    routes() {
        // NOTE: metodo para gestionar las rutas de mi servidor:
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
    }
    start() {
        // NOTE: metodo para iniciar el servidor (listen)
        this.app.listen(this.app.get('port'), () => {
            console.log('server running on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
