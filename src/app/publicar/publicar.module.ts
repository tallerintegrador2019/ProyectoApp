import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PublicarPage } from './publicar.page';

import { Camera,CameraOptions } from "@ionic-native/camera/ngx"; // 01.importamos la camara

const routes: Routes = [
  {
    path: '',
    component: PublicarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PublicarPage]
})
export class PublicarPageModule {

  image: string;

  constructor(private camera : Camera) {
  }

  public takePicture() {
    
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     console.log (err);
    });

  }

}
