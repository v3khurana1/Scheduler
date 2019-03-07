import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-display-testcases',
  templateUrl: './display-testcases.component.html',
  styleUrls: ['./display-testcases.component.css']
})
export class DisplayTestcasesComponent implements OnInit {

  constructor(
    private productListService  : ProductListService
  ) { }

  dataList : any;
  ngOnInit() {
    this.productListService.importList().subscribe(data => {this.dataList = data})
  }

}
