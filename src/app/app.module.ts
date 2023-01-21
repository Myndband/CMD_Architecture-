import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import { AdminDashboardComponent } from './appointments/components/admin-dashboard/admin-dashboard.component';
import { AllAppointmentsComponent } from './appointments/components/all-appointments/all-appointments.component';
import { AddAppointmentComponent } from './appointments/components/add-appointment/add-appointment.component';



import { HeaderComponent } from './shared/header/header.component';
import { AddDepartmentsComponent } from './appointments/components/add-departments/add-departments.component';
import { AddScheduleComponent } from './appointments/components/add-schedule/add-schedule.component';
import { DepartmentsComponent } from './appointments/components/departments/departments.component';
import { ScheduleComponent } from './appointments/components/schedule/schedule.component';
import { AddDoctorComponent } from './doctors/components/add-doctor/add-doctor.component';
import { DoctorsComponent } from './doctors/components/doctors/doctors.component';
import { AddPatientsComponent } from './patients/components/add-patients/add-patients.component';
import { PatientsComponent } from './patients/components/patients/patients.component';
import { AddClinicComponent } from './clinics/components/add-clinic/add-clinic.component';
import { ClinicInformationComponent } from './clinics/components/clinic-information/clinic-information.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    AllAppointmentsComponent,
    AddAppointmentComponent,
    DoctorsComponent,
    AddDoctorComponent,
    PatientsComponent,
    AddPatientsComponent,
    ScheduleComponent,
    AddScheduleComponent,
    DepartmentsComponent,
    AddDepartmentsComponent,
    HeaderComponent,
    ClinicInformationComponent,
    AddClinicComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
