import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameFormularioComponent } from './components/game-formulario/game-formulario.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/games',
    // NOTE: Cuando usamos una ruta main para redirigir a otra ruta tenemos que usar otra propiedad:
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: GameListComponent
  },
  {
    path: 'games/add',
    component: GameFormularioComponent
  },
  {
    path: 'games/edit/:id',
    component: GameFormularioComponent // usamos el mismo componente tanto para guardar como para editar
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
