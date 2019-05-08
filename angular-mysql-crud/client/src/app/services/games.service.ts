import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/Game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }
  // Podemos configurar comunicaciones http al servidor para pedir todos los juegos almacenados:
  // Metodo GET para listar todos los elementos alojados en la BBDD:
  getGames() {
    return this.http.get(`${this.API_URI}/games`);
  }

  // Metodo GET de un solo elemento de la BBDD:
  getGame(id: string) {
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  // Metodo POST para publicar datos nuevos en la BBDD:
  saveGame(game: Game) {
    return this.http.post(`${this.API_URI}/games`, game);
  }

  // Metodo DELETE para eliminar un elemento ${id} de la BBDD:
  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  // Metodo PUT para actualizar/modificar/editar un elemento ${id} en la BBDD:
  updateGame(id: string | number, updatedGame: Game): Observable<Game>{
    return this.http.put(`${this.API_URI}/games/${id}`, updatedGame);
  }
}
