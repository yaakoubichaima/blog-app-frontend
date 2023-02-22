import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsListPageComponent } from './blogs-list-page.component';
import { BlogPreviewComponent } from './blog-preview/blog-preview.component';



@NgModule({
  declarations: [
    BlogsListPageComponent,
    BlogPreviewComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class BlogsListPageModule { }
