import { Component, OnInit } from '@angular/core';

import { PublicacionI } from "../../models/publicacion.interface";
import { PublicacionService } from "../../services/publicacion.service";

import { AngularFireStorage } from "angularfire2/storage";
import { Observable } from "rxjs";
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  publicaciones: PublicacionI[];
  public goalList :any [];
  public loadedGoalList : any [];

  // propiedades de storage
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  image: string = null;

  constructor(private publicacionesService: PublicacionService, private storage: AngularFireStorage) {
  }

  ngOnInit(){
    this.publicacionesService.getPublicaciones().subscribe(res => this.publicaciones = res);
    this.publicacionesService.getPublicaciones().subscribe(goalList => {
      this.goalList = goalList;
      this.loadedGoalList = goalList;
    })
  }

  initializeItems() : void {
    this.goalList = this.loadedGoalList;
  }

  filterList(evt: any){
    console.log(evt);
    this.initializeItems();
    const searchTerm = evt.srcElement.value;
    if (!searchTerm){
      return;
    }

    this.goalList = this.goalList.filter(currentGoal => {
      if(currentGoal.nombre && searchTerm ){
        if(currentGoal.nombre.toLowerCase().indexOf(searchTerm.toLowerCase())> -1){
          return true;
        }
        return false;
      }
    });
  }

  // metodos de storage
  subirArchivo(event) {
    const file = event.target.files[0];
    const path = "images/demo126";
    const task = this.storage.upload(path, file);
    const ref = this.storage.ref(path);

    // observar porcentaje cambiados
    this.uploadPercent = task.percentageChanges();
    console.log('Image uploaded!');
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = ref.getDownloadURL()
        this.downloadURL.subscribe(url => (this.image = url));
      })
    ).subscribe();

  }





}
