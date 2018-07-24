import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import swal from 'sweetalert'
declare var $;

@Component({
  selector: 'app-modal-oficina',
  templateUrl: './modal-oficina.component.html',
  styleUrls: ['./modal-oficina.component.css']
})
export class ModalOficinaComponent implements OnInit {

  @Input() oficinaEditar;
  @Output() onSuccess = new EventEmitter();

  public title;

  public forma = new FormGroup({
    'nombreOf': new FormControl('', Validators.required),
    'pisoOf': new FormControl('', Validators.required),
    'telefonoOf': new FormControl('', Validators.required),
  })

  public arrPisos = ['Subsuelo', 'Planta baja', 'Primero', 'Segundo'];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  ngOnChanges()
  {
    if(this.oficinaEditar != null)
      this.asignarOficinaEditar();
    else
    {
      this.forma.reset();
      this.title = "Nueva oficina";
    }
  }

  public onSubmit()
  {
    if(this.title == "Nueva oficina")
    {
      this.httpService.insertarUno('oficina', {
        nombreOf: this.forma.get('nombreOf').value,
        pisoOf: this.forma.get('pisoOf').value,
        telefonoOf: this.forma.get('telefonoOf').value,
      })
      .subscribe(
        data=>{
          console.log(data);
          $('#modalOficina').modal('hide');
          swal("¡Perfecto!", "Oficina agregada con éxito", "success");
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
        this.httpService.editarUno('oficina', {
          idOf: this.oficinaEditar.idOf,
          nombreOf: this.forma.get('nombreOf').value,
          pisoOf: this.forma.get('pisoOf').value,
          telefonoOf: this.forma.get('telefonoOf').value,
        })
        .subscribe(
          data=>{
            console.log(data);
            $('#modalOficina').modal('hide');
            swal("¡Perfecto!", "Oficina editada con éxito", "success");
            this.onSuccess.emit();
          }
        );
      }
    }
  }

  private asignarOficinaEditar()
  {
    this.title = "Editar oficina";
    this.forma.get('nombreOf').setValue(this.oficinaEditar.nombreOf);
    this.forma.get('pisoOf').setValue(this.oficinaEditar.pisoOf);
    this.forma.get('telefonoOf').setValue(this.oficinaEditar.telefonoOf);
  }


}
