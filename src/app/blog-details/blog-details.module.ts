import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailsComponent } from './blog-details.component';
import { BlogService } from '../services/blog.service';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog.model';
import { ActivatedRoute } from '@angular/router';



@NgModule({
  declarations: [
    BlogDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogDetailsModule { 
 
}
