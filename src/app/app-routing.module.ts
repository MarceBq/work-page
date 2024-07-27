import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './school-page/pages/login/login.component';
import { RegisterComponent } from './school-page/pages/register/register.component';
// import { LandingComponent } from './school-page/pages/landing/landing.component';

import { AboutComponent } from './school-page/tabs/about/about.component';
import { ApplyComponent } from './school-page/tabs/apply/apply.component';
import { ExhibitionsComponent } from './school-page/tabs/exhibitions/exhibitions.component';
import { PublicationsComponent } from './school-page/tabs/publications/publications.component';
import { NewsComponent } from './school-page/tabs/news/news.component';
import { PublicEventsComponent } from './school-page/tabs/public-events/public-events.component';
import { HomeComponent } from './school-page/tabs/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Home',
    component: HomeComponent,
  },

  {
    path: 'About',
    component: AboutComponent
  },

  {
    path: 'Apply',
    component: ApplyComponent
  },

  {
    path: 'Exhibitions',
    component: ExhibitionsComponent,
  },

  {
    path: 'Publications',
    component: PublicationsComponent,
  },

  {
    path: 'News',
    component: NewsComponent,
  },

  {
    path: 'PublicEvents',
    component: PublicEventsComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
