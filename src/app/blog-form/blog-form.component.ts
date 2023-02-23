import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  blogForm: any
  //blogForm:FormGroup

  constructor(private router: Router){}
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
    console.log(formValues.blogTitle + " " + formValues.blogAuthor + " " + formValues.blogContent);
    this.router.navigate(['blogs']);
  }
  cancelForm(){
    this.router.navigate(['blogs']);
  }


}
