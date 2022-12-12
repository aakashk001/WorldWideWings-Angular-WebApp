import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/* Import the required modules here */

@Injectable({
  providedIn: 'root'
})
export class BookFlightService {

  errorMessage!: String;
  url = "http://localhost:1050/bookFlight";

  /* Inject the required dependencies into the constructor */
  constructor(private http:HttpClient) { }

  bookFlight(data: any): Observable<any> {
    const header = new HttpHeaders().set('Content-Type','application/json')
      return this.http.post<any>(this.url,data,{headers:header}) 
    /* your code goes here */
  }

}
