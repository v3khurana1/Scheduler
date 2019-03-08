import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { ApplicationName , Testcases} from './home/applicationName';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient) { }
  categoryList : any;

  TestCaseTreeList : any;
  returnURL ="http://localhost:3000/api/";

  getApplicationList(): Observable<ApplicationName[]>{
    return this.http.get<ApplicationName[]>(this.returnURL + "getApplicationList");
  }

  getData(ProductName){
    this.categoryList = this.http.post<Testcases[]>(this.returnURL + "getData",ProductName);
    
 }

 importList(){
   console.log("after Import")
   console.log(this.categoryList)
   return this.categoryList;
 }

 exportList(treeData){  
   console.log(treeData)
  this.TestCaseTreeList = treeData;
 }

 importTreeData(){
   console.log(this.TestCaseTreeList)
   return this.TestCaseTreeList;
 }
}
