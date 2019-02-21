import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

import * as fileSaver from '../../node_modules/file-saver'

import * as builder from '../../node_modules/xmlbuilder'

import { HttpClient } from '@angular/common/http';





@Injectable({

  providedIn: 'root'

})

export class XmlCreationService {





  returnURL ="http://localhost:3000/api/scheduler";

  constructor(private http: HttpClient) { 



  }

   public dataForXML;

   

   public exportData (selectedData){

    this.dataForXML = selectedData

   }



   

   xml : any;

   data;

  public createXML(){

    this.xml = builder.create('suite', {'type' : 'Suite',  'encoding' : 'UTF-8'})

    .ele('test', {'name': 'Test'},)

    .ele('classes')

 

    var classTag = this.xml;

     this.dataForXML.forEach(ele => {

          classTag.ele('class', {'name' : ele})

    })

    console.log("final xml")

    this.xml = this.xml.end({pretty : true})

    console.log(this.xml)

    var blob = new Blob([this.xml], {type: "text/plain;charset=utf-8"});

    fileSaver.saveAs(blob, "testNG.xml");



   

  }



fetchData() : Observable<JSON> {

console.log("Calling server api")  

   return  this.http.get<JSON>(this.returnURL);

}

}