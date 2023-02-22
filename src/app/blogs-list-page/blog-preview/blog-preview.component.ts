import { Component } from '@angular/core';

@Component({
  selector: 'blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.css'],
})
export class BlogPreviewComponent {
  blog: any = {
    title: 'Title',
    author: 'AuthorName',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    upVotes: 1,
    downVotes: 2,
    upvoted:  false,
    downvoted:  false,
  };
  
  upvote() {
    if (this.blog.upvoted) {
      this.blog.upVotes--;
      this.blog.upvoted=false;
    } else {
      this.blog.upVotes++;
      this.blog.upvoted =true;
      if (this.blog.downvoted){
        this.blog.downvoted=false;
        this.blog.downVotes--;
      }
      

    }
  }

  downvote() {
    if (this.blog.downvoted) {
      this.blog.downVotes--;
      this.blog.downvoted=false;
    } else {
      this.blog.downVotes++;
      this.blog.downvoted =true;
      if (this.blog.upvoted){
        this.blog.upvoted=false;
        this.blog.upVotes--;
      }
    }
  }
}
