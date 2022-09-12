import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
