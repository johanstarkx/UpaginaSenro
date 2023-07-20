import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-editar-tarjeta',
  templateUrl: './modal-editar-tarjeta.component.html',
  styleUrls: ['./modal-editar-tarjeta.component.css']
})

export class ModalEditarTarjetaComponent {
  @Input() card: any; // Propiedad para recibir la tarjeta a editar
  constructor(private modalService: NgbModal) {}

  guardarCambios() {
    // Aquí puedes realizar la lógica para guardar los cambios en la tarjeta
    console.log('Tarjeta editada:', this.card);
    // Cerrar el modal
    this.modalService.dismissAll();
  }
}
