import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private headers: Headers;
  
  constructor(
    private http: Http,
    private router: Router
  ) { }

  public login(password: string)
  {
    return this.http.post
    (
      environment.rutaApi +"usuario/login",
      {passwordUsu: password},
      {headers: this.headers}
    )
    .pipe(
      map(data => data.json())
    )
  }

  public isLogued()
  {
    let log = localStorage.getItem('credentials');
    if(log)
      return true;
    else
      return false;
  }

  public logOut()
  {
    localStorage.removeItem('credentials');
    this.router.navigate(['principal']);
  }
}
