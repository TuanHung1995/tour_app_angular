import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TourComponent } from './tour/tour.component';
import { TravelComponent } from './travel/travel.component';
import { Travel1Component } from './travel1/travel1.component';
import { PhoneComponent } from './phone/phone.component';
import { SystemComponent } from './system/system.component';
import { Tour1Component } from './tour1/tour1.component';
import { Tour2Component } from './tour2/tour2.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { Tour3Component } from './tour3/tour3.component';
import { Tour4Component } from './tour4/tour4.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'tour', component: TourComponent},
  {path: 'travel', component: TravelComponent},
  {path: 'travel1',  component: Travel1Component},
  {path: 'phone', component: PhoneComponent},
  {path: 'system', component: SystemComponent},
  {path: 'tour1', component: Tour1Component},
  {path: 'tour2', component: Tour2Component},
  {path: 'introduce', component: IntroduceComponent},
  {path: 'tour3',  component: Tour3Component},
  {path: 'tour4',  component: Tour4Component}
  {path: 'login', component: LoginComponent}
];
