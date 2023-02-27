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
  upvoted: boolean = false;
  downvoted: boolean = false;
  constructor(private blogService: BlogService) {}

  updateUpvotes() {
    this.blogService.updateBlog(this.blog._id, this.blog).subscribe(
      (data) => {},
      (error) => console.log(error)
    );
  }

  updateDownvotes() {
    this.blogService.updateBlog(this.blog._id, this.blog).subscribe(
      (data) => {},
      (error) => console.log(error)
    );
  }

  upvote() {
    if (this.upvoted) {
      this.blog.upVotes--;
      this.upvoted = false;
      this.updateUpvotes();
    } else {
      this.blog.upVotes++;
      this.upvoted = true;
      this.updateUpvotes();

      if (this.downvoted) {
        this.downvoted = false;
        this.blog.downVotes--;
        this.updateDownvotes();
      }
    }
  }

  downvote() {
    if (this.downvoted) {
      this.blog.downVotes--;
      this.downvoted = false;
      this.updateDownvotes();
    } else {
      this.blog.downVotes++;
      this.downvoted = true;
      this.updateDownvotes();

      if (this.upvoted) {
        this.upvoted = false;
        this.blog.upVotes--;
        this.updateUpvotes();
      }
    }
    this.blogService.updateBlog(this.blog._id, this.blog);
  }
}
