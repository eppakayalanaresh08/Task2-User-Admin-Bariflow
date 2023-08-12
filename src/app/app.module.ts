import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LateEmployeeComponent } from './late-employee/late-employee.component';
import { AbsentEmployeesComponent } from './absent-employees/absent-employees.component';
import { PresentEmployeesComponent } from './present-employees/present-employees.component';
import { ActiveEmployeesComponent } from './active-employees/active-employees.component';
// import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LateEmployeeComponent,
    AbsentEmployeesComponent,
    PresentEmployeesComponent,
    ActiveEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
