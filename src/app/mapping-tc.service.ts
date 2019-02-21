import { Injectable } from '@angular/core';
import {TestCaseList} from './select-testcases/SampleTestcasesList';
import { testCases } from './select-testcases/SampleTestcasesList'

@Injectable({
  providedIn: 'root'
})

export class displayTC {
 tollName : String;
 testCase : testCases[];
 line : String;
}
export class MappingTCService {
  
  constructor() { 
   
  }
  public tempArray = [];
  public flag;
  public mappedTC : displayTC[] = []
  public selectedTolls = [];


  getSelectedTolls(selectedTollsUI){
    if(this.selectedTolls.length > 0 ){
      this.clearArray(this.selectedTolls);
    }
  this.selectedTolls = selectedTollsUI;
  }

  mapTestcases(tollList){
    this.clearArray(this.tempArray)
    tollList.forEach(toll => {
    TestCaseList.forEach(tc =>{
      tc.tollDependency.forEach(ele =>{
        if(ele.TName == toll.tollName){
          toll.testCase.push(tc)
        }
      })
    })
  })
    return tollList;
  }

  exportSelectedTolls(){
    return this.selectedTolls;
  }

  clearArray(arr){
     arr.splice(0, arr.length);
  }
}