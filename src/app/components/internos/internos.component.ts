import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-internos',
  templateUrl: './internos.component.html',
  styleUrls: ['./internos.component.css']
})
export class InternosComponent implements OnInit {

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
