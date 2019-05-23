import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {
  public goalList :any [];
  public loadedGoalList : any [];
  constructor( private firestore : AngularFirestore, private publicacionesService: PublicacionService) { }

  ngOnInit() {
    this.publicacionesService.getPublicaciones().subscribe(goalList => {
      this.goalList = goalList;
      this.loadedGoalList = goalList;
    })
  }

  initializeItems() : void {
    this.goalList = this.loadedGoalList;
  }

  filterList(evt: any){
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
