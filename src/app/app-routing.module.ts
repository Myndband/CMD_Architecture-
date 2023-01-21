import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from './appointments/components/add-appointment/add-appointment.component';
import { AddDepartmentsComponent } from './appointments/components/add-departments/add-departments.component';
import { AddScheduleComponent } from './appointments/components/add-schedule/add-schedule.component';
import { AdminDashboardComponent } from './appointments/components/admin-dashboard/admin-dashboard.component';
import { AllAppointmentsComponent } from './appointments/components/all-appointments/all-appointments.component';
import { DepartmentsComponent } from './appointments/components/departments/departments.component';
import { ScheduleComponent } from './appointments/components/schedule/schedule.component';
import { AddClinicComponent } from './clinics/components/add-clinic/add-clinic.component';
import { ClinicInformationComponent } from './clinics/components/clinic-information/clinic-information.component';
import { AddDoctorComponent } from './doctors/components/add-doctor/add-doctor.component';
import { DoctorsComponent } from './doctors/components/doctors/doctors.component';
import { AddPatientsComponent } from './patients/components/add-patients/add-patients.component';
import { PatientsComponent } from './patients/components/patients/patients.component';


const routes: Routes = [
  {path: '', redirectTo:'/dashboard',pathMatch:'full'},
  {path: 'allAppointments', component:AllAppointmentsComponent},
  {path: 'dashboard', component:AdminDashboardComponent},
  {path: 'addAppointments', component:AddAppointmentComponent},

  {path: 'vets', component:DoctorsComponent},
  {path: 'addVets', component:AddDoctorComponent},
  
  {path: 'pets', component:PatientsComponent},
  {path: 'addPets', component:AddPatientsComponent},

  {path: 'schedule', component:ScheduleComponent},
  {path: 'addSchedule', component:AddScheduleComponent},

  {path: 'departments', component:DepartmentsComponent},
  {path: 'addDepartment', component:AddDepartmentsComponent},

 

  {path: 'clinic', component:ClinicInformationComponent},
  {path: 'addClinic', component:AddClinicComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
