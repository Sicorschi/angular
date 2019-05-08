"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
este fichero sera la cuna de conexion del servidor con la BBDD,
mediante el modulo de conexion promise-mysql.
*/
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
pool.getConnection()
    .then(connection => {
    pool.releaseConnection(connection);
    console.log('DB is connected');
});
// NOTE: finalment epara usarlo hay que exportarlo y que sea visible para el resto del codigo:
exports.default = pool;
// NOTE: ¿Donde se va usar este bloque de conexion con la BBDD?
// NOTE: Donde se van a realizar las consultas de rutas --> routes/
