import { Sensor } from 'src/app/clases/Sensor.model';
import { SensorService } from 'src/app/clases/Sensor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historialsensor',
  standalone: true,
  templateUrl: './historialsensor.component.html',
  imports:[CommonModule]
})
export class HistorialsensorComponent implements OnInit {
  id: string = "";
  sensor?: Sensor;

  constructor(
    private route: ActivatedRoute,
    private sensorService: SensorService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];

      // Obtener el sensor específico desde el servicio usando el ID
      this.sensorService.get(this.id).valueChanges().subscribe((sensor: Sensor | null) => {
        if (sensor) {
          this.sensor = sensor;
          console.log('Sensor completo:', this.sensor);
        } else {
          // Manejo de error: no se encontró el sensor con el ID proporcionado
          console.log('No se encontró el sensor con el ID proporcionado.');
        }
      });
    });
  }
}