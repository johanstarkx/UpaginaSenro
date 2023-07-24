import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Sensor } from './Sensor.model';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private dbPath = '/Sensores';

  sensorsRef: AngularFireList<Sensor>;

  constructor(private db: AngularFireDatabase) {
    this.sensorsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Sensor> {
    return this.sensorsRef;
  }

  create(sensor: Sensor): any {
    return this.sensorsRef.push(sensor);
  }

  update(key: string, value: any): Promise<void> {
    return this.sensorsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.sensorsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.sensorsRef.remove();
  }
}