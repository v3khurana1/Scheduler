import { Component, OnInit, Directive } from '@angular/core';
import {TOLLS} from './sampleTolls';
import { MappingTCService } from '../mapping-tc.service';

@Component({
  selector: 'app-toll-list',
  templateUrl: './toll-list.component.html',
  styleUrls: ['./toll-list.component.css']
})
export class TollListComponent implements OnInit {
  public all = false;
  public tolls = TOLLS;
  public selectedTolls = [];
  public mapTestCases = [];
  public emptyCheckboxes = false;
  constructor(
    private mappingService: MappingTCService
  ) { }

  ngOnInit() {
    this.tolls.forEach(element => {
      element.checked = false;
    })
   }
 
 public submitTolls(){
  this.tolls.forEach(element => {
   if (element.checked) {
     
     this.selectedTolls.push(element.name);
     }
  });
  console.log(this.selectedTolls);
  this.mappingService.getSelectedTolls(this.selectedTolls);
 }

 public toggle(ele){
  if (!ele.checked){
    ele.checked = true;
  }
  else{
    ele.checked = false;
  }
 }

 public checkStatus(ele){
   return ele.checked;
 }

 public selectAll(){
  this.all = !this.all;
  if(this.all){
    this.tolls.forEach(element => {
      element.checked = true;
  })
  }
  else{
    this.tolls.forEach(element => {
      element.checked = false;
  })
  }
 }

}