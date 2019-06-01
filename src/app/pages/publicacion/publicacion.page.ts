import { Component, OnInit } from '@angular/core';

import { PublicacionI } from "../../models/publicacion.interface";
import { PublicacionService } from "../../services/publicacion.service";
import { ActivatedRoute } from "@angular/router";
import { NavController, LoadingController } from "@ionic/angular";
import { AngularFireStorage } from "angularfire2/storage";
import { Observable } from "rxjs";
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
})

export class PublicacionPage implements OnInit {


  publicacion: PublicacionI = {
    nombre: "",
    descripcion: "",
    imagen: "",
  };

  publicacionId: null;

  // propiedades de storage
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  image: string = null;

  constructor(
    private route: ActivatedRoute,
    private nav: NavController,
    private publicacionService: PublicacionService,
    private loadingController: LoadingController,
    private storage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.publicacionId = this.route.snapshot.params['id'];
    if (this.publicacionId) {
      this.loadPublicacion();
    }
  }


  // metodos de subida de imagen a storage
  subirArchivo(event) {
    const file = event.target.files[0];
    const path = "publicaciones/img"+Math.random();
    const task = this.storage.upload(path, file);
    const ref = this.storage.ref(path);

    // observar porcentaje cambiados
    this.uploadPercent = task.percentageChanges();
    console.log('Imagen subida!');

    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = ref.getDownloadURL()
        this.downloadURL.subscribe(url => (this.image = url));
      })
    ).subscribe();
  }

  // metodo cargar publicacion
  async loadPublicacion() {
    const loading = await this.loadingController.create({
      message: 'Cargando.....'
    });

    await loading.present();
    this.publicacionService.getPublicacion(this.publicacionId).subscribe(res => {
      loading.dismiss();
      this.publicacion = res;
    });
  }
  // metodo guardar publicacion
  async savePublicacion() {
    const loading = await this.loadingController.create({
      message: "Guardando..."
    })

    await loading.present();

    if (this.publicacionId) {
      // si existe lo actualiza
      this.publicacionService.updatePublicacion(this.publicacion, this.publicacionId).then(() => {
        loading.dismiss();
        this.nav.navigateForward("/");
      });

    } else {
      // si no existe lo agrega como nuevo
      this.publicacionService.addPublicacion(this.publicacion).then(() => {
        loading.dismiss();
        this.nav.navigateForward("/");
      });
    }
  }

  // metodo para eliminar publicacion
  onRemove(idPublicacion: string) {
    this.publicacionService.removePublicacion(idPublicacion)
  }


}



