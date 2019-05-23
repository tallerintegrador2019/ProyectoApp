import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './components/list/list.module#ListPageModule' },
  { path: 'publicar', loadChildren: './pages/publicar/publicar.module#PublicarPageModule' },
  { path: 'publicacion/:id', loadChildren: './pages/publicacion/publicacion.module#PublicacionPageModule' },
  { path: 'publicacion', loadChildren: './pages/publicacion/publicacion.module#PublicacionPageModule' },
  { path: 'buscador', loadChildren: './pages/buscador/buscador.module#BuscadorPageModule' },
  { path: 'registrarse', loadChildren: './pages/registrarse/registrarse.module#RegistrarsePageModule' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
