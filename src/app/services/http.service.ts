import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private headers: Headers;

  constructor(
    private http: Http
  ) 
  {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  
  }

  public traerTodo(entidad: string)
  {
    return this.http.get(
      environment.rutaApi + entidad +'/traer'
    )
    .pipe(
      map(data => data.json())
    )
  }

  public traerPorId(entidad: string, id: number)
  {
    return this.http.get(
      environment.rutaApi + entidad +'/traer-por-id/'+ id.toString()
    )
    .pipe(
      map(data => data.json())
    )
  }

  public insertarUno(entidad: string, objeto)
  {
    return this.http.post
    (
      environment.rutaApi + entidad +"/insertar",
      objeto,
      { headers: this.headers }
    )
    .pipe(
      map(data => data.json())
    )
  }

  public editarUno(entidad: string, objeto)
  {
    return this.http.post
    (
      environment.rutaApi + entidad +"/editar",
      objeto,
      { headers: this.headers }
    )
    .pipe(
      map(data => data.json())
    )
  }

  public borrarUno(entidad: string, id: number)
  {
    return this.http.delete(
      environment.rutaApi + entidad +"/borrar/"+ id.toLocaleString(),
    )
    .pipe(
      map(data => data.json())
    )
  }

}
