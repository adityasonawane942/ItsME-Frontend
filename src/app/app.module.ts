import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutusComponent,
    ServicesComponent,
    ProjectsComponent,
    BookingsComponent,
    CareersComponent,
    ContactusComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
    RouterModule.forRoot([
      {path:'',component:HomepageComponent},
      {path:'aboutus',component:AboutusComponent},
      {path:'services',component:ServicesComponent},
      {path:'projects',component:ProjectsComponent},
      {path:'bookings',component:BookingsComponent},
      {path:'careers',component:CareersComponent},
      {path:'contactus',component:ContactusComponent},
      {
        path:'**',
          component:HomepageComponent,
      }
    ], { scrollPositionRestoration: 'top' }),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
