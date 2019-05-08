/* este archivo exportara un objeto que usaremos en el archivo database.ts
concretamente sera el dato/objeto de entrada para el metodo createPool(),
con el fin de conectarnos a la base de datos MySQL (Server<-->MySQL)
*/

export default {
  database: {
    host: 'localhost', // NOTE: aqui se introduce la ip del broker/nube AWS IBM
    user: 'root' ,// NOTE: el usuario con el que nos conectamos a BBDD
    password: '',
    database: 'ng_games_db'
  }
}
// NOTE: exportamos un objeto database{ propiedades: 'XXXX' }
