import { Component, OnInit } from '@angular/core';
import {TestcaseService} from '../testcase.service';
import {ProductListService} from '../product-list.service';
import {ApplicationName} from './applicationName';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ProductList : ApplicationName[];
  constructor(
    private testCaseService : TestcaseService,
    private productListService : ProductListService
    ) { }

  ngOnInit() {
    
    this.productListService.getApplicationList().subscribe(data => { this.ProductList = data }) ;
  }

  TestCaseList :any;

  selectTestCase(productName): void {
    this.productListService.getData(productName);
     
 }

}
