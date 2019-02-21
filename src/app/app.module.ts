import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubheaderNavigationComponent } from './subheader-navigation/subheader-navigation.component';
import { TollListComponent } from './toll-list/toll-list.component';
import { SelectTestcasesComponent } from './select-testcases/select-testcases.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {MappingTCService} from './mapping-tc.service';
import { LoadingPageComponent } from './loading-page/loading-page.component'
import { XmlCreationService } from './xml-creation.service';
import { } from '../../node_modules/xmlbuilder'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SubheaderNavigationComponent,
    TollListComponent,
    SelectTestcasesComponent,
    HomeComponent,
    LoadingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MappingTCService, XmlCreationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
