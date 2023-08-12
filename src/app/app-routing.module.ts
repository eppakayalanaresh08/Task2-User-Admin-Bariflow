import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LateEmployeeComponent } from './late-employee/late-employee.component';

import { AbsentEmployeesComponent } from './absent-employees/absent-employees.component';
import { PresentEmployeesComponent } from './present-employees/present-employees.component';
import { ActiveEmployeesComponent } from './active-employees/active-employees.component';


const routes: Routes = [
{ path: '', component: LoginComponent },{ path: 'home', component: HomeComponent},{ path: 'lateEmployee', component: LateEmployeeComponent},{ path: 'presentEmployee', component: PresentEmployeesComponent},

{ path: 'absentEmployee', component: AbsentEmployeesComponent },{ path: 'activeEmployee', component:  ActiveEmployeesComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
