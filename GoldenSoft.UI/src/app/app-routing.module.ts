import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './core/shared/components/not-found/not-found.component';
import { VigilanteGuard } from './vigilante.guard';

const routes: Routes = [
  //Importar los modulos de Public al ingresar la direccion de la pagina
  { path: '', 
  loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  //Ir al componente notfound por si no se encuentra la direccion
  { path: '**', component: NotFoundComponent},

];

@NgModule({
  //Truco para optimizar el refrescado de pagina
  //Usando una tecnica de hashing
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
