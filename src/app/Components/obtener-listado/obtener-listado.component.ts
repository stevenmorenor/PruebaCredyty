import { Component, OnInit } from '@angular/core';
import { ParqueaderoService } from 'src/app/Services/parqueadero.service';

@Component({
  selector: 'app-obtener-listado',
  templateUrl: './obtener-listado.component.html',
  styleUrls: ['./obtener-listado.component.css']
})
export class ObtenerListadoComponent {
  fechaInicio: string = '';
  fechaFin: string = '';
  vehiculos: any[] = [];

  constructor(private parqueaderoService: ParqueaderoService) {}

  buscarVehiculos() {
    if (this.fechaInicio && this.fechaFin) {
      const rangoDeTiempo = {
        inicio: new Date(this.fechaInicio),
        fin: new Date(this.fechaFin)
      };

      this.parqueaderoService.obtenerListado(rangoDeTiempo).subscribe(
        response => {
          this.vehiculos = response;
        },
        error => {
          console.error('Error al obtener listado de vehículos:', error);
        }
      );
    }
  }
}
