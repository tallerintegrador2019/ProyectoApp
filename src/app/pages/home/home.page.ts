import { Component, OnInit } from '@angular/core';

import { PublicacionI } from "../../models/publicacion.interface";
import { PublicacionService } from "../../services/publicacion.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  publicaciones: PublicacionI[];
  public goalList :any [];
  public loadedGoalList : any [];

  constructor(private publicacionesService: PublicacionService) {
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
}
