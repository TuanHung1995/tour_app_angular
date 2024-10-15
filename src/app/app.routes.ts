import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TourComponent } from './tour/tour.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'tour', component: TourComponent},
  {path: 'login', component: LoginComponent}
];
