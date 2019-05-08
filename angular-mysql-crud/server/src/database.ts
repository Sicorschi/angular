/*
este fichero sera la cuna de conexion del servidor con la BBDD,
mediante el modulo de conexion promise-mysql.
*/
import mysql from 'promise-mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);
pool.getConnection()
  .then(connection => {
    pool.releaseConnection(connection);
    console.log('DB is connected');
  });

// NOTE: finalment epara usarlo hay que exportarlo y que sea visible para el resto del codigo:
export default pool;

// NOTE: ¿Donde se va usar este bloque de conexion con la BBDD?
// NOTE: Donde se van a realizar las consultas de rutas --> routes/
