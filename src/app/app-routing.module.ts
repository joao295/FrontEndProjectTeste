import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { UsuarioComponent } from './perfil/usuario/usuario.component';

const routes: Routes = [

  // se não tiver nenhuma rota, direciona para /entrar
  {path:'', redirectTo:'entrar', pathMatch:'full'},

  // direciona a rota para os componentes em questão
  {path:'entrar', component:EntrarComponent},
  {path:'cadastrar', component:CadastrarComponent},
  
  {path:'inicio', component:InicioComponent},
  {path:'tema', component:TemaComponent},

  {path:'tema-edit/:id', component: TemaEditComponent}, // -> /: <- é como passamos parâmetro no endpoint
  {path:'tema-delete/:id', component: TemaDeleteComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent},
  {path: 'usuario-edit/:id', component: UsuarioEditComponent},
  {path: 'usuario/:id', component: UsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
