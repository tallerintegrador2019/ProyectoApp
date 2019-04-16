import { Component, OnInit } from '@angular/core';

import { Camera,CameraOptions } from "@ionic-native/camera/ngx"; // 01.importamos la camara

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.page.html',
  styleUrls: ['./publicar.page.scss'],
})
export class PublicarPage /*implements OnInit*/ {

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
    /*
  ngOnInit() {
  }*/

}
