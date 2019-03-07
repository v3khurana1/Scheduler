import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { ApplicationName } from './home/applicationName';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient) { }
  testcaseList : any;
  returnURL ="http://localhost:3000/api/";

  getApplicationList(): Observable<ApplicationName[]>{
    return this.http.get<ApplicationName[]>(this.returnURL + "getApplicationList");
  }

  getData(ProductName){
    this.testcaseList = this.http.post(this.returnURL + "getData",ProductName);
 }

 importList(){
   return this.testcaseList;
 }

}
