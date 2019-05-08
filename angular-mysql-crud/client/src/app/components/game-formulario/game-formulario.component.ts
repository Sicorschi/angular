import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from '../../models/Game';
import { GamesService } from '../../services/games.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-game-formulario',
  templateUrl: './game-formulario.component.html',
  styleUrls: ['./game-formulario.component.css']
})
export class GameFormularioComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  edit: boolean = false;


  constructor(private gamesService: GamesService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if(params.id) {
      this.gamesService.getGame(params.id).subscribe(
        res => {
          console.log(res)
          this.game = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

  saveNewGame() {
    delete this.game.created_at;
    delete this.game.id;
    this.gamesService.saveGame(this.game).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/games']);
      },
      err => console.error(err)
    )
  }

  updateGame() {
    delete this.game.created_at;
    this.gamesService.updateGame(this.game.id, this.game).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/games'])
      },
      err => console.error(err)
    )
  }

}
