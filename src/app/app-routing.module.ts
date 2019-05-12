import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'publicar', loadChildren: './publicar/publicar.module#PublicarPageModule' },
  { path: 'publicacion/:id', loadChildren: './publicacion/publicacion.module#PublicacionPageModule' },
  { path: 'publicacion', loadChildren: './publicacion/publicacion.module#PublicacionPageModule' }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
