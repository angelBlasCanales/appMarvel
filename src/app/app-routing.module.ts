import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { BitacoraConsultasComponent } from './bitacora-consultas/bitacora-consultas.component';

const routes: Routes = [
  {path : 'characters', component:CharacterListComponent},
  {path : '', redirectTo:'characters',pathMatch:'full'},
  {path : 'bitacora-consultas', component:BitacoraConsultasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
