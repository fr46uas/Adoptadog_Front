import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MapaComponent } from './mapa/mapa.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegistroComponent } from './registro/registro.component';
import { ForoComponent } from './foro/foro.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { LoginGuard } from './login.guard';
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/principal' },

  { path: 'login', component: LoginComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'quienessomos', component: NosotrosComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'chat', component: ForoComponent, canActivate: [LoginGuard] },
  { path: 'buscador', component: BuscadorComponent },
  { path: '**', component: ErrorcomponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
