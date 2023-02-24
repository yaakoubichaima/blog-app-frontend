import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';

@Component({
  selector: 'blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.css'],
})
export class BlogPreviewComponent {
  @Input() blog!: Blog;
    upvoted:  boolean = false
    downvoted:  boolean = false

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
  
  upvote() {
    if (this.upvoted) {
      this.blog.upVotes--;
      this.upvoted=false;
    } else {
      this.blog.upVotes++;
      this.upvoted =true;
      if (this.downvoted){
        this.downvoted=false;
        this.blog.downVotes--;
      }
      

    }
  }

  downvote() {
    if (this.downvoted) {
      this.blog.downVotes--;
      this.downvoted=false;
    } else {
      this.blog.downVotes++;
      this.downvoted =true;
      if (this.upvoted){
        this.upvoted=false;
        this.blog.upVotes--;
      }
    }
  }
}
