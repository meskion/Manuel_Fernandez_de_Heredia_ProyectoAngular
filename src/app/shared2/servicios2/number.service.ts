import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class NumberService {


  constructor(private httpClient: HttpClient) { };

  public buscarNumero(term: string): Observable<any> {
    return this.httpClient.get(`http://numbersapi.com/${term}`,{responseType: 'text'});
    
    }
}
