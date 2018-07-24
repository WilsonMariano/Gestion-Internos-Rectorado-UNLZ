import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit {

  public password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public ingresar()
  {
    // if(this.password == 'valbau2018')
    // {
      this.router.navigate(['oficinas']);
    // }
  }

}
