import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
import { ModalEditarTarjetaComponent } from './modal-editar-tarjeta/modal-editar-tarjeta.component';

const firebaseConfig = {
  apiKey: "AIzaSyAZ5na9Q4ZqORfVR6eYvwmWx7VxdxCi0xo",
  authDomain: "proyectoinvernaderoarica-ab35c.firebaseapp.com",
  databaseURL: "https://proyectoinvernaderoarica-ab35c-default-rtdb.firebaseio.com",
  projectId: "proyectoinvernaderoarica-ab35c",
  storageBucket: "proyectoinvernaderoarica-ab35c.appspot.com",
  messagingSenderId: "93700256865",
  appId: "1:93700256865:web:b4f4c82b3a6839ae1ee620"
};

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ModalEditarTarjetaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModalModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class CardModule { }
