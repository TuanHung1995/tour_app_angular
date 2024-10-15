import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TourComponent } from './tour/tour.component';
import { TravelComponent } from './travel/travel.component';
import { Travel1Component } from './travel1/travel1.component';
import { PhoneComponent } from './phone/phone.component';
import { SystemComponent } from './system/system.component';


export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'tour', component: TourComponent},
  {path: 'travel', component: TravelComponent},
  {path: 'travel1',  component: Travel1Component},
  {path: 'phone', component: PhoneComponent},
  {path: 'system', component: SystemComponent},


];
