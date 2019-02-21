import { Component, OnInit } from '@angular/core';

import {XmlCreationService} from '../xml-creation.service'



@Component({

  selector: 'app-loading-page',

  templateUrl: './loading-page.component.html',

  styleUrls: ['./loading-page.component.css']

})

export class LoadingPageComponent implements OnInit {



  constructor(

    private xmlCreation : XmlCreationService

  ) { }



  ngOnInit() {

    this.createtestNGXML()

  }

  createtestNGXML() : void {

    // this.xmlCreation.createXML();

    this.xmlCreation.fetchData()

  .subscribe(data=>{ console.log("Data received");

  console.log(data)

  console.log(JSON.stringify(data));

    

  })

  }

}