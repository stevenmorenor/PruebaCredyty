import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParqueaderoService {

  private baseUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  registrarIngreso(vehiculoData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/registrar-ingreso`, vehiculoData);
  }

  liquidarValorSalida(id: number, clienteRealizoCompra: boolean, totalCompra: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/liquidar-valor-salida/${id}?clienteRealizoCompra=${clienteRealizoCompra}&totalCompra=${totalCompra}`);
  }

  obtenerListado(rangoDeTiempo: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/obtener-listado`, rangoDeTiempo);
  }
}
