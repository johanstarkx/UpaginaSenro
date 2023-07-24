import { Component, OnInit } from '@angular/core';
import { Sensor } from 'src/app/clases/Sensor.model';
import { SensorService } from 'src/app/clases/Sensor.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-listasensores2',
  templateUrl: './listasensores2.component.html',
  styleUrls: ['./listasensores2.component.css']
})
export class Listasensores2Component implements OnInit {
sensores? : Sensor[];
sensorActual?: Sensor;
indiceactual: number = -1;
titulo: string = "";

constructor(private sensorserv: SensorService){

}
ngOnInit(): void {
  this.obtenerSensores();
  console.log(this.sensores)
}

actualizar() : void {
  this.sensorActual = undefined;
    this.indiceactual = -1;
    this.obtenerSensores();
}
obtenerSensores(): void {
  this.sensorserv.getAll().snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ key: c.payload.key, ...c.payload.val() })
      )
    )
  ).subscribe(data => {
    this.sensores = data;
  });
}
cambiarSensorActivo(sensor: Sensor, index: number): void {
  this.sensorActual = sensor;
  this.indiceactual = index;
}

eliminarSensores(): void {
  this.sensorserv.deleteAll()
    .then(() => this.actualizar())
    .catch(err => console.log(err));
}
}
