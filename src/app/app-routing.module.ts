import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {path: 'auth',  //PARA CARGAR RUTAS HIJAS en modo lazyload
  loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)},

  {path: 'heroes',  //PARA CARGAR RUTAS HIJAS en modo lazyload
  loadChildren: () => import('./heroes/heroes.module').then(module => module.HeroesModule),
  canLoad:[AuthGuard], canActivate:[AuthGuard]},

  {path: '404', component: ErrorPageComponent},

  {path: '**', redirectTo: '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
