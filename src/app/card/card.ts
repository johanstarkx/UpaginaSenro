export class Card {
    ID_Usuario: string;
    MaxRequerido: string;
    MinRequerido: string;
    Nombre: string;
    ValorActual: string;
    
    constructor(ID_Usuario: string, MaxRequerido: string, MinRequerido: string, Nombre: string, ValorActual: string) {
      this.ID_Usuario = ID_Usuario;
      this.MaxRequerido = MaxRequerido;
      this.MinRequerido = MinRequerido;
      this.Nombre = Nombre;
      this.ValorActual = ValorActual;
    }
  }