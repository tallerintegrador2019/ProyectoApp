import { Component, OnInit } from '@angular/core';

import { PublicacionI } from "../../models/publicacion.interface";
import { PublicacionService } from "../../services/publicacion.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  publicaciones: PublicacionI[];

  constructor(private publicacionesService: PublicacionService) {
  }

  ngOnInit(){
    this.publicacionesService.getPublicaciones().subscribe(res => this.publicaciones = res);
  }

}
