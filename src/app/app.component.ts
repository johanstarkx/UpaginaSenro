import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditarTarjetaComponent } from './modal-editar-tarjeta/modal-editar-tarjeta.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  card: any[] = [];
  @Input() ids: number;
/*{ id: number, title: string, content: string, nombresensor: any, tipocultivo: any, valoractual: any, valorminimo: number, valormaximo: number } */

  constructor(private modalService: NgbModal) {
    this.ids = 0;
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
  borrarCard(cx:any) {
    // Encuentra el índice del elemento con el ID proporcionado en el arreglo cards
    const index = this.card.findIndex(c => c.id === cx.id);

    if (index !== -1) {
      // Si se encontró el elemento, elimínalo utilizando splice
      this.card.splice(index, 1);
    }
    console.log('Borrar card con ID:', cx.id);
  }

  editarCard(cx:any) {
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

  verCard(cx:any) {
    // Lógica para ver el card con el ID proporcionado
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
