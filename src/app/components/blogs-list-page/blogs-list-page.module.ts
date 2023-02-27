import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsListPageComponent } from './blogs-list-page.component';
import { BlogPreviewComponent } from './blog-preview/blog-preview.component';
import { BlogVotesComponent } from '../blog-votes/blog-votes.component';

@NgModule({
  declarations: [
    BlogsListPageComponent,
    BlogPreviewComponent,
    BlogVotesComponent,
  ],
  imports: [CommonModule],
})
export class BlogsListPageModule {}
