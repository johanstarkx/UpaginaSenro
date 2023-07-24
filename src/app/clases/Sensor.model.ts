export class Sensor {
    ID?: string | null;
    ID_Usuario?: string;
    MaxRequerido?: string;
    MinRequerido?: string;
    Nombre?: string;
    ValorActual?: string;
    Cultivo?: string;
    Historial?: Historial[];
    
    constructor(ID: string, ID_Usuario: string, MaxRequerido: string, MinRequerido: string, Nombre: string, ValorActual: string, Cultivo: string, Historial: Historial[]) {
      this.ID = ID;
      this.ID_Usuario = ID_Usuario;
      this.MaxRequerido = MaxRequerido;
      this.MinRequerido = MinRequerido;
      this.Nombre = Nombre;
      this.ValorActual = ValorActual;
      this.Cultivo = Cultivo;
      this.Historial = Historial;
    }
  
  }
  export interface Historial {
    Valor: string;
    Fecha: string;
    Hora: string;
  }