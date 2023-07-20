import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditarTarjetaComponent } from './modal-editar-tarjeta/modal-editar-tarjeta.component';
import firebase from 'firebase/compat/app'; // Importa el módulo de Firebase
import { of, Observable } from 'rxjs';

/// esto es de firebase

import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Lista de Sensores';
  card: any[] = [];
  ids: number = 0;

  constructor(private modalService: NgbModal) {
    // Inicializa la configuración de Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyAZ5na9Q4ZqORfVR6eYvwmWx7VxdxCi0xo",
      authDomain: "proyectoinvernaderoarica-ab35c.firebaseapp.com",
      databaseURL: "https://proyectoinvernaderoarica-ab35c-default-rtdb.firebaseio.com",
      projectId: "proyectoinvernaderoarica-ab35c",
      storageBucket: "proyectoinvernaderoarica-ab35c.appspot.com",
      messagingSenderId: "93700256865",
      appId: "1:93700256865:web:b4f4c82b3a6839ae1ee620"
    };
    initializeApp(firebaseConfig); // Inicializa la aplicación de Firebase
  }

  // Getter para devolver el observable de la lista de tarjetas
  get cardObservable(): Observable<any[]> {
    return of(this.card);
  }

  generarCard() {
    const newCard = {
      id: this.ids + 1,
      title: "a",
      content: "456456",
      nombresensor: "a",
      tipocultivo: "a",
      valoractual: "a",
      valorminimo: 1,
      valormaximo: 2,
    };
    this.ids += 1;
    this.card.push(newCard);
  }

  borrarCard(cx: any) {
    // Encuentra el índice del elemento con el ID proporcionado en el arreglo card
    const index = this.card.findIndex(c => c.id === cx.id);

    if (index !== -1) {
      // Si se encontró el elemento, elimínalo utilizando splice
      this.card.splice(index, 1);
    }
    console.log('Borrar card con ID:', cx.id);
  }

  editarCard(cx: any) {
    // Encontrar la tarjeta en el arreglo y actualizar sus valores
    const index = this.card.findIndex(c => c.id === cx.id);
    if (index !== -1) {
      this.card[index] = cx;

      // Abrir el modal para editar la tarjeta
      const modalRef = this.modalService.open(ModalEditarTarjetaComponent);
      modalRef.componentInstance.card = cx; // Pasar la tarjeta al componente del modal

      // Escuchar el resultado del modal (por ejemplo, cuando se guarda la edición)
      modalRef.result.then((editedCard: any) => {
        // Actualizar el arreglo de tarjetas con la tarjeta editada
        this.card[index] = editedCard;
      }).catch(() => {
        // Modal cerrado sin guardar cambios (opcional: manejar aquí)
      });
    }
  }

  verCard(cx: any) {
    // Lógica para ver la tarjeta con el ID proporcionado
    console.log('Ver card con ID:', cx.id);
  }

  openEditarModal(card: { id: number, title: string, content: string }) {
    /*this.selectedCard = card;
    const modalRef = this.modalService.open(ModalEditarCardComponent);
    modalRef.componentInstance.card = card;
    modalRef.result.then(
      (result) => {
        // Lógica a realizar después de cerrar el modal (por ejemplo, guardar los cambios)
        console.log('Edición completada', result);
        this.selectedCard = null;
      },
      (reason) => {
        // Lógica a realizar si el modal se cierra sin guardar los cambios
        console.log('Edición cancelada');
        this.selectedCard = null;
      }
    );*/
  }

}
