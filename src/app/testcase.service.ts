import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestcaseService {

  constructor(private http: HttpClient) { }

  returnURL ="http://localhost:3000/api/scheduler";

  getTestCase(ProductName) : Observable<any[]>{
     return this.http.post<any[]>(this.returnURL,ProductName);
  }


}
