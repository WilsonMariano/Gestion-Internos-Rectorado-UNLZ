import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() 
  {
    this.traerOficinas();
  }

  private traerOficinas()
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
      buttons: true,
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

}
