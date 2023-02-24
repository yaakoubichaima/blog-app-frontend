import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog.model';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blogs-list-page',
  templateUrl: './blogs-list-page.component.html',
  styleUrls: ['./blogs-list-page.component.css'],
})

export class BlogsListPageComponent implements OnInit {
  blogs$: Observable<Blog[]> = of([]);

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    console.log(' before reloadData');

    this.blogs$ = this.blogService.getBlogList();
    this.blogs$.subscribe(data => {

    })
  }
}
