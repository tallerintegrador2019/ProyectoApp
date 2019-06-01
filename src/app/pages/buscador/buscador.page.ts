import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { YoutubeService } from 'src/app/services/youtube.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {
  public goalList :any [];
  public loadedGoalList : any [];
  channelId = 'UC1z8Q3KYrPz8kbd3JYPsNuQ';
  playlists : Observable<any[]>;
  constructor(public navCtrl: NavController , private firestore : AngularFirestore, private publicacionesService: PublicacionService,
     private youtubeService : YoutubeService, private alertCrtl : AlertController) { }

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
  //  searchPlayList(){
  //   this.playlists = this.youtubeService.getPlaylistsForChannel(this.channelId);
  //   this.playlists.subscribe(data => {console.log('data :', data)} ,
  //                           async err => { let alert = await this.alertCrtl.create({
  //                                                   header : 'Error',
  //                                                   subHeader : 'en Playlist',
  //                                                   message : 'No Playlist found',
  //                                                   buttons : ['OK']
  //                                                 }); 
  //                                         alert.present();
  //                                        });
  // }

  // openPlayList(id){
  //   this.navCtrl.navigateBack('PlayListPage/',id);
  // }
  // openPlayList(id){
  //   this.navCtrl.
  //   //(PlaylistPage,{id : id} );
  // }
}
