import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Sensor } from 'src/app/clases/Sensor.model';
import { SensorService } from 'src/app/clases/Sensor.service';

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

  constructor(private sensorService: SensorService) { }

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
    
  }
}