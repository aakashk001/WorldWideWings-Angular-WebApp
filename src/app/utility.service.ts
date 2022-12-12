import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http:HttpClient) { }
  loadDatabse(): Observable<any>{
    return <Observable<any>> this.http.get(`http://localhost:1050/setupDb`);
  }
}
