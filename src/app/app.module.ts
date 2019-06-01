import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// imports para Youtube
import { HttpModule} from '@angular/http';
import {YoutubeVideoPlayer, YoutubeVideoPlayerOriginal} from '@ionic-native/youtube-video-player';
import {YoutubeService } from "./services/youtube.service";

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';   // 01.importamos la camara

// imports para firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
  // aca dentro va la pagina de la playlist PlayListPage
  declarations: [AppComponent],
  
  entryComponents: [],
  
  imports: [
    HttpModule,
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
    YoutubeService,
   // YoutubeVideoPlayer,
    Camera,   // 02.agregamos Camara a providers
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  
  bootstrap: [AppComponent]

})

export class AppModule {}
