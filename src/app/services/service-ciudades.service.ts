import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from '../interfaces/ciudad';

@Injectable({
  providedIn: 'root'
})
export class ServiceCiudadesService {

  constructor(private http: HttpClient) { }

  private API = '/api/23e9a5b97a84494588221f48a6e639f9/ciudades'; // Ruta relativa

getCiudades(): Observable<Ciudad[]>{
  return this.http.get<Ciudad[]>(this.API)
}

getCiudad(ciudad: Ciudad): Observable<Ciudad>{
  return this.http.get<Ciudad>(`${this.API}/${ciudad._id}`)
}



addCiudad(ciudad: string): Observable<Ciudad>{
  const body = {name: ciudad}
  return this.http.post<Ciudad>(this.API, body)
}

updateCiudad(ciudad: Ciudad): Observable<Ciudad>{
  const body = {name: ciudad.name}
  return this.http.put<Ciudad>(`${this.API}/${ciudad._id}`, body)
}

deleteCiudad(id: string): Observable<void>{
  return this.http.delete<void>(`${this.API}/${id}`)
}

}

