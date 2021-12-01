import { Injectable } from '@angular/core';
import { Usuario } from '../clases2/usuario';
import { Observable, of } from 'rxjs';

@Injectable()
export class LoginService {

  constructor() { }
  public login(usuario: Usuario): Observable<number> {
    return of(Math.random() * (1000 - 0));
  }
}
