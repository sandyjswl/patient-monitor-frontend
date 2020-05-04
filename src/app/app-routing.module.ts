import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SummaryCardsComponent} from './summary-cards/summary-cards.component';
import {PatientInfoComponent} from './patient-info/patient-info.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SummaryCardsComponent
  },
  {
    path: 'patient/:id',
    component: PatientInfoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
