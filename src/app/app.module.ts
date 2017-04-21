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

const MY_ROUTES:Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'student',component:StudentComponent},
  {path:'student/profile/:id',component:ProfileComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [MyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
