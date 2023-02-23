import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogFormComponent } from './blog-form.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BlogFormComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class BlogFormModule { }
