import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TourComponent } from './tour/tour.component';
import { TravelComponent } from './travel/travel.component';
import { PhoneComponent } from './phone/phone.component';
import { SystemComponent } from './system/system.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { LoginComponent } from './auth/login/login.component';
import { InfoComponent } from './info/info.component';
import { RegisterComponent } from './auth/register/register.component';
import { DetailsComponent } from './details/details.component';
import { FollowedTourComponent } from './followed-tour/followed-tour.component';

import { TravelListComponent } from './travel-list/travel-list.component';

export const routes: Routes = [
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'tours', component: TourComponent},
  { path: 'tour/:id', component: DetailsComponent },
  {path: 'travel', component: TravelComponent},
  {path: 'phone', component: PhoneComponent},
  {path: 'system', component: SystemComponent},
  {path: 'introduce', component: IntroduceComponent},
  {path: 'login', component: LoginComponent},
  {path: 'info', component: InfoComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'followed-tour', component: FollowedTourComponent},
  {path: 'travel-list', component: TravelListComponent },
];
