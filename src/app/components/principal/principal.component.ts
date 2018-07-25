import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public arrInternos = [];
  public arrAuxiliar = [];
  public criterioBusqueda = "nombre"
  public cadenaBuscar = "";
  public p: number = 1;
  public cantPagPrincipal = 15;

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.traerInternos();
  }

  private traerInternos()
  {
    this.httpService.traerTodo('interno').subscribe(
      data => {
        this.arrInternos = data;
        this.arrAuxiliar = data;
      }
    )
  }

  public onKeyPress()
  {
    this.arrAuxiliar = [];

    switch(this.criterioBusqueda)
    {
      case 'nombre':
        this.arrInternos.forEach(element => {
          if(
              (<string>element['nombreInt']).toLowerCase().includes(this.cadenaBuscar.toLowerCase()) || 
              (<string>element['apellidoInt']).toLowerCase().includes(this.cadenaBuscar.toLowerCase())
          )
          this.arrAuxiliar.push(element); 
        });
      break;
      case 'oficina':
        this.arrInternos.forEach(element => {
          if(
              (<string>element['nombreOf']).toLowerCase().includes(this.cadenaBuscar.toLowerCase())
          )
          this.arrAuxiliar.push(element); 
        });
      break;
      case 'piso':
      this.arrInternos.forEach(element => {
        if(
            (<string>element['pisoOf']).toLowerCase().includes(this.cadenaBuscar.toLowerCase())
        )
        this.arrAuxiliar.push(element); 
      });
    break;

    }
  }

}
