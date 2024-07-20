import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { UsuariolistaComponent } from './usuariolista/usuariolista.component';
import { AtualizarusuarioComponent } from './atualizarusuario/atualizarusuario.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
 {  path: 'login', component: LoginComponent},
 {  path: 'cadastro', component: CadastroComponent},
 {  path: 'usuariolista', component: UsuariolistaComponent, canActivate: [AuthGuard]},
 {  path: 'atualizar/:id', component: AtualizarusuarioComponent, canActivate: [AuthGuard]},
 { path: '', redirectTo: 'login', pathMatch: 'full' },
 { path: '**', redirectTo: '/' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }