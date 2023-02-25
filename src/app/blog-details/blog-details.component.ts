import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../models/blog.model';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit{
  id: any;
  blog!: Blog;
  clicked=true;

  constructor(private blogService: BlogService, private route: ActivatedRoute,){}
  ngOnInit(){
    this.blog= new Blog();
    this.id = this.route.snapshot.params["id"];
    this.getBlog()
  }

  getBlog() {

    this.blogService.getBlogById(this.id).subscribe(data => {
      this.blog =data;
      console.log(data);

    })}

    check(){
      this.clicked=!this.clicked;
    }

}
