import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

    username: string = ""
    password: string = ""
    cpassword: string = ""
    constructor(public afAuth: AngularFireAuth) { }

    ngOnInit() {
    }

    async registrar() {
      const { username, password, cpassword } = this
      if (password !== cpassword) {
        return console.error("Las contraseñas no coinciden")        
      }

      try {
        const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@todaviasirve.com', password)
        console.log(res)
      } catch (error) {
        console.dir(error)
      }
      

    }

}
