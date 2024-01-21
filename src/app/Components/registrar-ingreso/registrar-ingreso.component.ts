import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ParqueaderoService } from 'src/app/Services/parqueadero.service';
import { Vehiculo } from 'src/app/models/vehiculo';


@Component({
  selector: 'app-registrar-ingreso',
  templateUrl: './registrar-ingreso.component.html',
  styleUrls: ['./registrar-ingreso.component.css']
})
export class RegistrarIngresoComponent implements OnInit {


  vehiculo: Vehiculo = {
    tipoVehiculo: '',
    placa: ''
  };

  constructor(private parqueaderoService: ParqueaderoService) { }

  ngOnInit(): void {
  }

  registrarIngreso() {

    // Lógica para registrar el ingreso utilizando tu servicio ParqueaderoService
    this.parqueaderoService.registrarIngreso(this.vehiculo)
      .subscribe(
        (response) => {
          console.log('Ingreso registrado exitosamente:', response);
          // Puedes realizar acciones adicionales según tus necesidades
        },
        (error) => {
          console.error('Error al registrar el ingreso:', error);
          // Puedes manejar el error de acuerdo a tus necesidades
        }
      );
  }

}
