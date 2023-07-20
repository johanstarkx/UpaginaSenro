import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card: any;
  @Output() borrarCard: EventEmitter<any> = new EventEmitter<any>();
  @Output() editarCard: EventEmitter<any> = new EventEmitter<any>();
  @Output() verCard: EventEmitter<any> = new EventEmitter<any>();

  
  botonBorrar() {
    this.borrarCard.emit(this.card);
  }

  botonEditar() {
    this.editarCard.emit(this.card);
  }

  botonVer() {
    this.verCard.emit(this.card);
  }
  
}