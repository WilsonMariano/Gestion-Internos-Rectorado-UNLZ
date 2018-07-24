import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-internos',
  templateUrl: './internos.component.html',
  styleUrls: ['./internos.component.css']
})
export class InternosComponent implements OnInit {

  public nombreOf;
  public pisoOf;
  public telefonoOf;
  public idOficina: number;
  public arrInternos = [];
  public internoEditar = null;
  public p = 1;
  public cantPagListados = environment.cantPagListados;

  constructor(
    private activateRoute: ActivatedRoute,
    private httpService: HttpService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.recibirParametro();
  }

  private recibirParametro()
  {
    this.activateRoute.params.subscribe(
      data =>{
        this.idOficina = data['idOf'];
        this.traerInternos();
      }
    )
  }

  public traerInternos()
  {
    this.spinner.show();
    this.httpService.traerPorId('interno', this.idOficina).subscribe(
      data =>{
        this.arrInternos = data;
        console.log(data);
        this.nombreOf = localStorage.getItem('nombreOf');
        this.pisoOf = localStorage.getItem('pisoOf');
        this.telefonoOf = localStorage.getItem('telefonoOf');
        setTimeout(() => this.spinner.hide(), 500);
      }
    )
  }

  public borrar(interno)
  {
    swal({
      title: "¿Estás seguro...",
      text: "que deseas eliminar este interno?",
      icon: "warning",
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.httpService.borrarUno('interno', interno.idInt).subscribe(
          data =>{
            this.traerInternos();
            swal("¡Perfecto!", "Oficina borrada con éxito", "success");
          }
        );
      } 
    });   
  }

}
