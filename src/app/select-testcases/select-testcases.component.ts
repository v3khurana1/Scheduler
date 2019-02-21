import { Component, OnInit } from '@angular/core';
import { MappingTCService, displayTC} from '../mapping-tc.service';
import { XmlCreationService } from '../xml-creation.service';



@Component({
  selector: 'app-select-testcases',
  templateUrl: './select-testcases.component.html',
  styleUrls: ['./select-testcases.component.css']
})
export class SelectTestcasesComponent implements OnInit {

  constructor(
    private mappingService: MappingTCService,
    private xmlCreation : XmlCreationService
  ) { }
  public selectedTCs = [];
  public displayTC;
  public index;

  ngOnInit() {
    this.selectedTCs = [];
    this.displayTC = [];
    if(this.displayTC.length > 0){
      this.clearArray(this.displayTC)
    }
    this.getMappedList();

    this.displayTC.forEach(tcObject => {
      tcObject.testCase.forEach( tc => {
        tc.checked = false
      })
    })
  }

  clearArray(arr){
    arr.splice(0, arr.length);
 }
  
  getMappedList() : void {
      this.mappingService.exportSelectedTolls().map(toll =>{
      this.displayTC.push({tollName: toll, testCase : [], line : 'for toll ' + toll})
    })
    this.displayTC = this.mappingService.mapTestcases(this.displayTC);
   }

   public toggle(tcObject, id){
      this.index = this.displayTC.indexOf(tcObject);
      console.log("index "+ tcObject.tollName + "  " + this.index)
      this.displayTC[this.index].testCase.forEach(ele => {
          if(ele.id == id){
            if(!ele.checked){
              ele.checked = true
              console.log("changed to true on toggle ")
              console.log(ele)
            }
            else{
              ele.checked = false
              console.log("changed to false on toggle ")
              console.log(ele)
            }
          }
      })
    console.log(tcObject)
    console.log("display tc after toggle")
    console.log(this.displayTC)
   }
   
 public submittestCases(){
   this.clearArray(this.selectedTCs)
   console.log("after selection")
   console.log(this.displayTC)
  this.displayTC.forEach(element => {
    element.testCase.forEach(e => {
      if(this.checkStatus(e)){
        this.selectedTCs.push(e.name);
      }
    });
  });
  console.log(this.selectedTCs)
 }



 public checkStatus(ele){
   return ele.checked;
 }

 public selectAll(){
  this.displayTC.forEach(element => {
    element.checked = true;
  })
 }

 public createXml(){
  this.submittestCases();
  if(this.selectedTCs.length < 1){
    console.log("No testcases selected");
  }
  else{
    console.log("Create  XML file for testNG suite");
    this.xmlCreation.exportData(this.selectedTCs);
 
  }
   
 }
}