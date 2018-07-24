import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oficinas',
  templateUrl: './oficinas.component.html',
  styleUrls: ['./oficinas.component.css']
})
export class OficinasComponent implements OnInit {

  public arrOficinas = [];
  public oficinaEditar = null;

  constructor(
    private httpService: HttpService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit() 
  {
    this.traerOficinas();
  }

  public traerOficinas()
  {
    this.spinner.show();
    this.httpService.traerTodo('oficina').subscribe(
      data =>{
        this.arrOficinas = data;
        setTimeout(() => this.spinner.hide(), 500);
      }
    )
  }

  public borrar(oficina)
  {
    swal({
      title: "¿Estás seguro...",
      text: "que deseas eliminar esta oficina?",
      icon: "warning",
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.httpService.borrarUno('oficina', oficina.idOf).subscribe(
          data =>{
            this.traerOficinas();
            swal("¡Perfecto!", "Oficina borrada con éxito", "success");
          }
        );
      } 
    });   
  }

  public navInternos(oficina)
  {
    localStorage.setItem('nombreOf', oficina.nombreOf);
    localStorage.setItem('pisoOf', oficina.pisoOf);
    localStorage.setItem('telefonoOf', oficina.telefonoOf);
    this.router.navigate(['internos', oficina.idOf]);
  }


}
