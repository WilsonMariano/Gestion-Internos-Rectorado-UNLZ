import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public arrInternos = [];

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
        console.log(data);
      }
    )
  }

}
