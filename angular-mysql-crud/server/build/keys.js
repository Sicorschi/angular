"use strict";
/* este archivo exportara un objeto que usaremos en el archivo database.ts
concretamente sera el dato/objeto de entrada para el metodo createPool(),
con el fin de conectarnos a la base de datos MySQL (Server<-->MySQL)
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    database: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'ng_games_db'
    }
};
// NOTE: exportamos un objeto database{ propiedades: 'XXXX' }
