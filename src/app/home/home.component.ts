import { Component, OnInit } from '@angular/core';
import {TestcaseService} from '../testcase.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ProductList = ['IContract', 'ISupplier', 'IManage', 'ISave', 'ISource', 'eProc', 'eInvoice', 'eCatalouge', 'ZSN', 'iRequest', 'iAnalyze', 'iPerform'];

  constructor(private testCaseService : TestcaseService) { }

  ngOnInit() {

  }

  TestCaseList :any;

  selectTestCase(productName): void {
    console.log(productName)
    this.testCaseService.getTestCase(productName).subscribe(data => {this.TestCaseList = data});
     
 }

}
