import { Component, OnInit } from '@angular/core';

import { PublicacionI } from "../models/publicacion.interface";
import { PublicacionService } from "../services/publicacion.service";
import { ActivatedRoute } from "@angular/router";
import { NavController, LoadingController } from "@ionic/angular";

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
})

export class PublicacionPage implements OnInit {

  publicacion: PublicacionI= {
    nombre: "",
    descripcion: "",
    imagen: "",
  };

  publicacionId: null;

  constructor(
    private route: ActivatedRoute, 
    private nav: NavController,
    private publicacionService: PublicacionService,
    private loadingController: LoadingController
    ){ }

  ngOnInit() {
    this.publicacionId = this.route.snapshot.params['id'];
    if(this.publicacionId){
      this.loadPublicacion();
    }
  }

  async loadPublicacion(){
    const loading = await this.loadingController.create({
      message: 'Cargando.....'
    });

    await loading.present();
    this.publicacionService.getPublicacion(this.publicacionId).subscribe(res => {
      loading.dismiss();
      this.publicacion = res;
    });
  }

  async savePublicacion(){
    const loading = await this.loadingController.create({
      message: "Guardando....."
    })
    await loading.present();

    if(this.publicacionId){
      // Actualizar
      this.publicacionService.updatePublicacion(this.publicacion, this.publicacionId).then(() =>{
        loading.dismiss();
        this.nav.navigateForward("/");
      });
  
    } else {
      // Agregar nuevo
        this.publicacionService.addPublicacion(this.publicacion).then(() =>{
        loading.dismiss();
        this.nav.navigateForward("/");
      });
    }

  }

    onRemove(idPublicacion: string){
      this.publicacionService.removePublicacion(idPublicacion)
    }


  }


