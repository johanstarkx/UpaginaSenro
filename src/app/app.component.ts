import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {AngularFireDatabase} from '@angular/fire/compat/database'
import { ModalEditarTarjetaComponent } from './modal-editar-tarjeta/modal-editar-tarjeta.component';
import { of, Observable } from 'rxjs';
import {Card} from './card/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Lista de Sensores';
  public card: any[];

  constructor(private db: AngularFireDatabase) {
    this.card = [];
    this.getStarted()
  }

  async getStarted(){
    var cards: Card[];
    await this.getCardsFromRealtimeDB().then(value => {
      cards = value as Card[];
      this.card = cards;
      console.log(this.card)
    });
    
  }

  getCardsFromRealtimeDB(){
    return new Promise((resolve,reject) => {
      this.db.list('Sensores').valueChanges().subscribe(value =>{
        resolve(value)
      })
    })
  }

  

  generarCard() {
    /**
     * const newCard = {
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
     */
  }

  borrarCard(cx: any) {
    /* // Encuentra el índice del elemento con el ID proporcionado en el arreglo card
    const index = this.card.findIndex(c => c.id === cx.id);

    if (index !== -1) {
      // Si se encontró el elemento, elimínalo utilizando splice
      this.card.splice(index, 1);
    }
    console.log('Borrar card con ID:', cx.id);*/
  }

  editarCard(cx: any) {
    /*
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
    } */
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

