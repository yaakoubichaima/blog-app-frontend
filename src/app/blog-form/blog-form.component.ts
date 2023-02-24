import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from '../models/blog.model';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  blogForm: any
  //blogForm:FormGroup
  blog: Blog = new Blog();
  submitted = false;
  id!: number;

  constructor(private blogService: BlogService, private router: Router){}
  ngOnInit(): void {
    
    let blogTitle = new FormControl()
    let blogAuthor = new FormControl()
    let blogContent = new FormControl()

    this.blogForm = new FormGroup({
      blogTitle: blogTitle,
      blogAuthor: blogAuthor,
      blogContent: blogContent,
    })
  }


  saveBlog(formValues: { blogTitle: string; blogAuthor: string; blogContent: string; }){

    console.log(formValues);
    this.submitted = true;
    this.blog.blogTitle=formValues.blogTitle;
    this.blog.blogAuthor=formValues.blogAuthor;
    this.blog.blogContent=formValues.blogContent;

    this.blogService.createBlog(this.blog).subscribe(data =>{ 
    },
    error => console.log(error));
    this.gotoList();
  }

  cancelForm(){
    this.router.navigate(['blogs']);
  }


  newBlog():void{
    this.submitted=false;
    this.blog = new Blog();

  }



  gotoList(){
    this.router.navigate(['/preview'])
  }


}
