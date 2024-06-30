import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './tabs/home/home.component';
import { AboutComponent } from './tabs/about/about.component';
import { ApplyComponent } from './tabs/apply/apply.component';
import { ExhibitionsComponent } from './tabs/exhibitions/exhibitions.component';
import { PublicationsComponent } from './tabs/publications/publications.component';
import { NewsComponent } from './tabs/news/news.component';
import { PublicEventsComponent } from './tabs/public-events/public-events.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RegisterComponent } from './pages/register/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ApplyComponent,
    ExhibitionsComponent,
    PublicationsComponent,
    NewsComponent,
    PublicEventsComponent,
    LoginComponent,
    LandingComponent,
    RegisterComponent,
  ],
  imports: [MaterialModule, SharedModule, ReactiveFormsModule, CommonModule, FormsModule],
  exports: [
    HomeComponent,
    AboutComponent,
    ApplyComponent,
    ExhibitionsComponent,
    PublicationsComponent,
    NewsComponent,
    PublicEventsComponent,
    LandingComponent,
    LoginComponent,
  ],
})
export class SchoolPageModule {}
