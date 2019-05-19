import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PublicacionI } from "../models/publicacion.interface";

@Injectable({
  providedIn: 'root'
})


export class PublicacionService {

  private publicacionesCollection: AngularFirestoreCollection<PublicacionI>;
  private publicaciones: Observable<PublicacionI[]>;

  constructor(db: AngularFirestore) {
    this.publicacionesCollection = db.collection<PublicacionI>('publicaciones');
    this.publicaciones = this.publicacionesCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
   }

   // TRAER TODAS LAS PUBLICACIONES
   getPublicaciones(){
     return this.publicaciones;
   }

   // TRAER SOLO 1 PUBLICACION
   getPublicacion(id: string){
     return this.publicacionesCollection.doc<PublicacionI>(id).valueChanges();
   }

   // MODIFICAR PUBLICACION
   updatePublicacion(publicacion: PublicacionI, id: string){
     return this.publicacionesCollection.doc(id).update(publicacion);
   }

   // AGREGAR PUBLICACION
   addPublicacion(publicacion: PublicacionI){
     return this.publicacionesCollection.add(publicacion);
   }

   // BORRAR PUBLICACION
   removePublicacion(id: string){
     return this.publicacionesCollection.doc(id).delete();
   }


}
