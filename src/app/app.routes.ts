import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TourComponent } from './tour/tour.component';
import { TravelComponent } from './travel/travel.component';
import { PhoneComponent } from './phone/phone.component';
import { SystemComponent } from './system/system.component';
import { Tour1Component } from './tour1/tour1.component';
import { Tour2Component } from './tour2/tour2.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { Tour3Component } from './tour3/tour3.component';
import { Tour4Component } from './tour4/tour4.component';
import { LoginComponent } from './auth/login/login.component';
import { InfoComponent } from './info/info.component';
import { Travel2Component } from './travel2/travel2.component';
import { Travel3Component } from './travel3/travel3.component';
import { Travel4Component } from './travel4/travel4.component';
import { Travel5Component } from './travel5/travel5.component';
import { Travel6Component } from './travel6/travel6.component';
import { Travel7Component } from './travel7/travel7.component';
import { Travel8Component } from './travel8/travel8.component';
import { Travel9Component } from './travel9/travel9.component';
import { Travel10Component } from './travel10/travel10.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'tours', component: TourComponent},
  {path: 'travel', component: TravelComponent},
  {path: 'phone', component: PhoneComponent},
  {path: 'system', component: SystemComponent},
  {path: 'tour1', component: Tour1Component},
  {path: 'tour2', component: Tour2Component},
  {path: 'introduce', component: IntroduceComponent},
  {path: 'tour3',  component: Tour3Component},
  {path: 'tour4',  component: Tour4Component},
  {path: 'login', component: LoginComponent},
  {path: 'info', component: InfoComponent},
  {path: 'travel2', component: Travel2Component},
  {path: 'travel3', component: Travel3Component},
  {path: 'travel4', component: Travel4Component},
  {path: 'travel5', component: Travel5Component},
  {path: 'travel6', component: Travel6Component},
  {path: 'travel7', component: Travel7Component},
  {path: 'travel8', component: Travel8Component},
  {path: 'travel9', component: Travel9Component},
  {path: 'travel10', component: Travel10Component}

];
