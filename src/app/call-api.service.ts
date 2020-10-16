import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  private headers: any;

  constructor(private httpClient: HttpClient) { }
  
  setHeaders () {
    let httpHeader = new HttpHeaders();
    let token = localStorage.getItem('token');
    httpHeader.set('Authentication', token);
    this.headers = httpHeader;
  }

  public get(url: string) {
    this.setHeaders();
    return this.httpClient.get(url, {headers: this.headers});
  }
  post(url: string, data: any) {
    return this.httpClient.post(url, data);
  }

  
}
