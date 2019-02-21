import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TollListComponent } from './toll-list/toll-list.component';
import { SelectTestcasesComponent } from './select-testcases/select-testcases.component';
import { HomeComponent } from './home/home.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';



const routes: Routes = [
  {path : 'incoming-tolls', component: TollListComponent},
  {path : 'incoming-tolls/selectTestSuite', component: SelectTestcasesComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'selectTestSuite', component : SelectTestcasesComponent},
  {path : 'incoming-tolls/selectTestSuite/xmlCreation', component : LoadingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
