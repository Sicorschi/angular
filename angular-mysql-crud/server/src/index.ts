import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';
import morgan from 'morgan';
import cors from 'cors';

class Server {
  public app: Application; // NOTE: Application es el tipado de la variable app.
  constructor() {
    this.app = express();
    // NOTE: configuramos app (para que se ejecuten los metodos config() + routes()) para despues iniciarlo con server.start():
    this.config();
    this.routes();
  }
  config(): void {
    // NOTE: metodo para configurar las caracteristicas de mi servidor, puerto, direccion, etc.
    this.app.set('port', process.env.PORT || 3000);
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false })) // NOTE: info enviar en caso de formularios

  }
  routes(): void {
    // NOTE: metodo para gestionar las rutas de mi servidor:
    this.app.use(indexRoutes);
    this.app.use('/api/games', gamesRoutes);

  }
  start(){
    // NOTE: metodo para iniciar el servidor (listen)
    this.app.listen(this.app.get('port'), () => {
      console.log('server running on port', this.app.get('port'));
    })
  }

}

const server = new Server();
server.start()
