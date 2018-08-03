import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit {

  public password: string;

  constructor(
    private router: Router,
    public authService: AuthService) { }

  ngOnInit() {
  }

  public ingresar()
  {
    this.authService.login(this.password).subscribe(
      data=>{
        if(data)
        {
          localStorage.setItem('credentials', 'true');
          this.router.navigate(['oficinas']);
        }
        else
        {
          swal("Aviso!", "Contraseña incorrecta", "warning");
        }
      }
    )
    this.password = "";
  }

  public logOut()
  {
    this.authService.logOut();
  }

}
