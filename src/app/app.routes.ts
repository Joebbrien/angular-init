import { RouterModule, Routes } from '@angular/router';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
  { path: 'new-component', component: MyNewComponentComponent },
  { path: 'login', component: LoginComponent },
];


