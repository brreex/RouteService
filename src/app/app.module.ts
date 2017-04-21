import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { ProfileComponent } from './profile/profile.component';
import {MyGuard} from './my-guard.service';
import {DbService} from './db.service';
import { ErrorComponent } from './error/error.component';

const MY_ROUTES:Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'student',component:StudentComponent},
  {path:'student/profile/:id',canActivate:[MyGuard],component:ProfileComponent},
  {path:'error',component:ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [MyGuard,DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
