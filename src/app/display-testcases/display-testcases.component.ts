import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { ApplicationName, Testcases } from '../home/applicationName';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';


interface TreeNode {
  name: String;
  children?: [];
}
@Component({
  selector: 'app-display-testcases',
  templateUrl: './display-testcases.component.html',
  styleUrls: ['./display-testcases.component.css']
})
export class DisplayTestcasesComponent implements OnInit {
  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();
  dataList: Testcases[];
  categoryArray = [];
  finalArray = {};
  modArray = [];
  constructor(
    private productListService: ProductListService
  ) { }

  ngOnInit() {
    this.productListService.importList().subscribe(data => {
      this.dataList = data,
        this.findUniqueCategory()
        // this.dataSource.data = this.finalArray
    })
  }

  findUniqueCategory = function () {
    const map = new Map();
    for (const item of this.dataList) {
      if (!map.has(item.categoryName)) {
        map.set(item.categoryName, true);
        this.categoryArray.push(item.categoryName);
        // this.finalArray.push({ [item.categoryName]: {} })
        this.finalArray[item.categoryName] = {}
      }
    }
    console.log(this.finalArray)
    this.findUniqueModule();
  }

  findUniqueModule = function () {
    const map = new Map();
    const categoryName = Object.keys(this.finalArray)
    console.log(categoryName)
    categoryName.forEach(cat => {
      this.dataList.forEach(item => {
        if (item.categoryName == cat) {
          if (!map.has(item.moduleName)) {
            map.set(item.moduleName, true);
            this.finalArray[cat][item.moduleName] = []
          }
        }
      })
    })
    console.log(this.finalArray)
    this.findTestCase()
  }

  findTestCase = function () {
    const categoryName = Object.keys(this.finalArray)
    categoryName.forEach(cat => {
      const moduleName = Object.keys(this.finalArray[cat])
      moduleName.forEach(modName => {
        this.dataList.forEach(item => {
          if(item.moduleName == modName){
            this.finalArray[cat][item.moduleName].push(item.testCaseName)
          }
        })
      })
    })
    console.log("After testcase fetch")
    console.log(this.finalArray)
  }
  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;
}
