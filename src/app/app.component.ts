import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/tabs/home',
      icon: 'home'
    },
    {
      title: 'Publicar transformacion',
      url: '/tabs/publicacion',
      icon: 'add-circle-outline'
    },
    {
      title: 'Buscar Articulo',
      url: '/buscador',
      icon: 'search'     
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'add-circle-outline'     
    },
    {
      title: 'Registrarse',
      url: '/registrarse',
      icon: 'key'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
