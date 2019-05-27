import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';   // 01.importamos la camara

// imports para firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
  
  declarations: [AppComponent],
  
  entryComponents: [],
  
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
  
    // FIREBASE
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    Camera,   // 02.agregamos Camara a providers
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  
  bootstrap: [AppComponent]

})

export class AppModule {}
