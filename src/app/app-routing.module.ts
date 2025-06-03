import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListarAnimaisComponent} from "./modules/listar-animais/listar-animais.component";
import {CadastrarAnimalComponent} from "./modules/cadastrar-animal/cadastrar-animal.component";
import {AlterarAnimalComponent} from "./modules/alterar-animal/alterar-animal.component";

const routes: Routes = [
  {path: '', component: ListarAnimaisComponent},
  {path: 'cadastrar', component: CadastrarAnimalComponent},
  {path: 'alterar/:id', component: AlterarAnimalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
