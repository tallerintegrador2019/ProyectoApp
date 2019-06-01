import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
//import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  
  apiKey = 'AIzaSyDy7u1y2Hst4gzhXCi4REzd-MQOLmMP9gA ';
  constructor(public http : Http) { }

  getPlaylistsForChannel(channel){
    return this.http.get('http://www.googleapis.com/youtube/v3/playlists?key=' + 
    this.apiKey + '&channelId=' + channel+ '&part=snippet,id&maxResult=20').pipe(map(res=> {
      return res.json()['items']
    }));
  }

  getListVideos(listId){
    return this.http.get('http://www.googleapis.com/youtube/v3/playlistItems?key=' + 
    this.apiKey + '&playlistId=' + listId+ '&part=snippet,id&maxResult=20').pipe(map(res=> {
      return res.json()['items']
    }));
  }
}
