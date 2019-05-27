import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'publicar', loadChildren: './pages/publicar/publicar.module#PublicarPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'publicacion/:id', loadChildren: './pages/publicacion/publicacion.module#PublicacionPageModule' },
  { path: 'publicacion', loadChildren: './pages/publicacion/publicacion.module#PublicacionPageModule' },
  { path: 'buscador', loadChildren: './pages/buscador/buscador.module#BuscadorPageModule' },
  { path: 'registrarse', loadChildren: './pages/registrarse/registrarse.module#RegistrarsePageModule' }


  /* 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './components/list/list.module#ListPageModule' },
  { path: 'publicar', loadChildren: './pages/publicar/publicar.module#PublicarPageModule' },
  { path: 'publicacion/:id', loadChildren: './pages/publicacion/publicacion.module#PublicacionPageModule' },
  { path: 'publicacion', loadChildren: './pages/publicacion/publicacion.module#PublicacionPageModule' },
  { path: 'buscador', loadChildren: './pages/buscador/buscador.module#BuscadorPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'registrar', loadChildren: './pages/registrar/registrar.module#RegistrarPageModule' }


  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule' } 
  */

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
