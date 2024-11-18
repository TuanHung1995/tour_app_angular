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
import { Travel10Component } from './travel10/travel10.component';
import { CartComponent } from './cart/cart.component';
import { InfomationComponent } from './account/infomation/infomation.component';
import { OrderedComponent } from './account/ordered/ordered.component';
import { PasswordComponent } from './account/password/password.component';
import { AddressComponent } from './account/address/address.component';
import { Travel2Component } from './travel2/travel2.component';
import { Travel3Component } from './travel3/travel3.component';
import { Travel4Component } from './travel4/travel4.component';
import { Travel5Component } from './travel5/travel5.component';
import { Travel6Component } from './travel6/travel6.component';
import { Travel7Component } from './travel7/travel7.component';
import { Travel8Component } from './travel8/travel8.component';
import { Travel9Component } from './travel9/travel9.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FindBookingComponent } from './find-booking/find-booking.component';
import { SearchComponent } from './search/search.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

import { TravelListComponent } from './travel-list/travel-list.component';

export const routes: Routes = [
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'tours', component: TourComponent},
  {path: 'tour/:id', component: DetailsComponent},
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
  {path: 'cart', component: CartComponent},
  {path: 'information', component: InfomationComponent},
  {path: 'ordered', component: OrderedComponent},
  {path: 'password', component: PasswordComponent},
  {path: 'address', component: AddressComponent},
  {path: 'travel2', component: Travel2Component},
  {path: 'travel3', component: Travel3Component},
  {path: 'travel4', component: Travel4Component},
  {path: 'travel5', component: Travel5Component},
  {path: 'travel6', component: Travel6Component},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'find-booking', component: FindBookingComponent},
  {path: 'search', component: SearchComponent},
  {path: 'order-details', component: OrderDetailsComponent},
];
