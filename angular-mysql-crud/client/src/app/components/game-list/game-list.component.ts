import { Component, OnInit, HostBinding } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models/Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  // Mediante el HostBinding implementamos la configuracion de classes en forma de fila,
  // guardando y pintando las tarjetas una al lado de otra en fila.
  @HostBinding('class') classes = 'row';

  games: any = [];

  constructor(private gamesSerice: GamesService) { }

  ngOnInit() {
    // Apenas se ejecuta la aplicacion ejecuta el metodo especificado:
    this.getGames();
  }

  getGames() {
    this.gamesSerice.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.error(err)
    );
  }

  deleteGame(id: string) {
    this.gamesSerice.deleteGame(id).subscribe(
      res => {
        console.log(res);
        this.getGames();
      },
      err => console.error(err)
    )
  }



}
