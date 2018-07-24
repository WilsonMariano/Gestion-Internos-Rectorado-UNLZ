import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpService } from '../../services/http.service';
declare var $;

@Component({
  selector: 'app-modal-interno',
  templateUrl: './modal-interno.component.html',
  styleUrls: ['./modal-interno.component.css']
})
export class ModalInternoComponent implements OnInit {

  @Input() internoEditar;
  @Input() idOficina;
  @Output() onSuccess = new EventEmitter();

  public title;
  public forma = new FormGroup({
    'apellidoInt': new FormControl('', Validators.required),
    'nombreInt': new FormControl('', Validators.required),
    'numeroInt': new FormControl('', Validators.required),
  })
  
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  ngOnChanges()
  {
    if(this.internoEditar != null)
      this.asignarInternoEditar();
    else
    {
      this.forma.reset();
      this.title = "Nuevo interno";
    }
  }

  private asignarInternoEditar()
  {
    console.log(this.internoEditar);
    this.title = "Editar interno";
    this.forma.get('apellidoInt').setValue(this.internoEditar.apellidoInt);
    this.forma.get('nombreInt').setValue(this.internoEditar.nombreInt);
    this.forma.get('numeroInt').setValue(this.internoEditar.numeroInt);
  }

  public onSubmit()
  {
    if(this.title == "Nuevo interno")
    {
      this.httpService.insertarUno('interno', {
        idOf: this.idOficina,
        apellidoInt: this.forma.get('apellidoInt').value,
        nombreInt: this.forma.get('nombreInt').value,
        numeroInt: this.forma.get('numeroInt').value,
      })
      .subscribe(
        data=>{
          console.log(data);
          $('#modalInterno').modal('hide');
          swal("¡Perfecto!", "Interno agregado con éxito", "success");
          this.onSuccess.emit();
        }
      );
    }
    else
    {
      if(this.forma.pristine)
        swal("Aviso", "Debes editar al menos un campo", "warning");

      else
      {
        this.httpService.editarUno('interno', {
          idInt: this.internoEditar.idInt,
          apellidoInt: this.forma.get('apellidoInt').value,
          nombreInt: this.forma.get('nombreInt').value,
          numeroInt: this.forma.get('numeroInt').value,
        })
        .subscribe(
          data=>{
            console.log(data);
            $('#modalInterno').modal('hide');
            swal("¡Perfecto!", "Interno editado con éxito", "success");
            this.onSuccess.emit();
          }
        );
      }
    }
  }

}
