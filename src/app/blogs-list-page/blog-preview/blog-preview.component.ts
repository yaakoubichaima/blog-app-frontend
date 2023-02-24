import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.css'],
})
export class BlogPreviewComponent {
  @Input() blog!: Blog;
    upvoted:  boolean = false
    downvoted:  boolean = false
  constructor(private blogService: BlogService){}

  // blog: any = {
  //   title: 'Title',
  //   author: 'AuthorName',
  //   content:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   upVotes: 1,
  //   downVotes: 2,
  //   upvoted:  false,
  //   downvoted:  false,
  // };

  updateUpvotes(){
    this.blogService.updateBlog(this.blog._id, this.blog)
    .subscribe (data =>{
    }, error => console.log(error)
      );
  }

  updateDownvotes(){
    this.blogService.updateBlog(this.blog._id, this.blog)
    .subscribe (data =>{
    }, error => console.log(error)
      );
  }

  upvote() {
    if (this.upvoted) {
      this.blog.upVotes--;
      this.upvoted=false;
      this.updateUpvotes();

      
    } else {
      this.blog.upVotes++;
      this.upvoted =true;
      this.updateUpvotes();

      if (this.downvoted){
        this.downvoted=false;
        this.blog.downVotes--;
        this.updateDownvotes();
        

      }

    }
  }

  downvote() {
    if (this.downvoted) {
      this.blog.downVotes--;
      this.downvoted=false;
      this.updateDownvotes();

    } else {
      this.blog.downVotes++;
      this.downvoted =true;
      this.updateDownvotes();

      if (this.upvoted){
        this.upvoted=false;
        this.blog.upVotes--;      
        this.updateUpvotes();

      }
    }
    this.blogService.updateBlog(this.blog._id, this.blog);
  }
}
