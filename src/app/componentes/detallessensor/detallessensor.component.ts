import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Sensor } from 'src/app/clases/Sensor.model';
import { SensorService } from 'src/app/clases/Sensor.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
	selector: 'ngbd-modal-content',
	standalone: true,
	template: `
		<div class="modal-header">
			<h4 class="modal-title">Hi there!</h4>
			<button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
		</div>
		<div class="modal-body">
			<p>Hello, {{ name }}!</p>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
		</div>
	`,
})
export class NgbdModalContent {
	@Input() name : any[] = [];

	constructor(public activeModal: NgbActiveModal) {}
}



@Component({
  selector: 'app-detallessensor',
  templateUrl: './detallessensor.component.html',
  styleUrls: ['./detallessensor.component.css']
})
export class DetallessensorComponent implements OnInit {
  @Input() sensor?: Sensor;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentSensor: Sensor = {
    Nombre: '',
    Cultivo: '',
    MinRequerido:"",
    MaxRequerido:"",
  };
  message = '';

  constructor(private sensorService: SensorService,private modalService: NgbModal,private router: Router) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentSensor = { ...this.sensor };
  }

  updatePublished(status: boolean): void {
    if (this.currentSensor.ID) {
      this.sensorService.update(this.currentSensor.ID, { published: status })
      .then(() => {
      })
      .catch(err => console.log(err));
    }
  }

  updateSensor(): void {
    const data = {
      Nombre: this.currentSensor.Nombre,
      Cultivo: this.currentSensor.Cultivo
    };

    if (this.currentSensor.ID) {
      this.sensorService.update(this.currentSensor.ID, data)
        .then(() => this.message = 'El sensor ha sido actualizado.')
        .catch(err => console.log(err));
    }
  }

  deleteSensor(): void {
    if (this.currentSensor.ID) {
      this.sensorService.delete(this.currentSensor.ID)
        .then(() => {
          this.refreshList.emit();
          this.message = 'El sensor ha sido eliminado.';
        })
        .catch(err => console.log(err));
    }
  }

  verHistorial() : void {
    this.router.navigate(['/historial/'+this.sensor?.ID]);
  }
}