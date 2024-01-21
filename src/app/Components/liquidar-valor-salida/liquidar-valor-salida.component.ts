import { Component, OnInit } from '@angular/core';
import { ParqueaderoService } from 'src/app/Services/parqueadero.service';

@Component({
  selector: 'app-liquidar-valor-salida',
  templateUrl: './liquidar-valor-salida.component.html',
  styleUrls: ['./liquidar-valor-salida.component.css']
})
export class LiquidarValorSalidaComponent implements OnInit {

  idVehiculo: number;
  realizoCompra: boolean = false;
  totalCompra: number ;

  constructor(private parqueaderoService: ParqueaderoService) { }

  ngOnInit(): void {
    // Puedes agregar lógica de inicialización si es necesario
  }

  liquidarValorSalida() {
    if (this.realizoCompra) {
      const valorLiquidado = this.calcularValorLiquidado();
      console.log('Valor liquidado:', valorLiquidado);

    } else {
      console.log('No se realizó la compra');
      
    }
  }

  private calcularValorLiquidado(): number {
    return this.totalCompra * 0.3; 
  }
}
