import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  covURL = 'https://covid2019-api.herokuapp.com/';

  constructor(private httpClient: HttpClient) { }

  public obtenerMuertes(): Observable<any> {
    const url = this.covURL+'deaths';
    return this.httpClient.get<any>(url);
  }

  public obtenerRecuperados(): Observable<any> {
    const url = this.covURL+'recovered';
    return this.httpClient.get<any>(url);
  }
  public obtenerTotal(): Observable<any> {
    const url = this.covURL+'total';
    return this.httpClient.get<any>(url);
  }


}
