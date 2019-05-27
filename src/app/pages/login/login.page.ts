import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  //logueo con email
  async login() {
    const { username, password } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@todosirve.com', password)
    } catch (error) {
      console.dir(error)
      if (error.code === "auth/user-not-found") {
        console.log("Usuario no encontrado")
      }
    }
  }

}
