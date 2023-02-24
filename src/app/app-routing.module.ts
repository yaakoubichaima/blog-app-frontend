import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogsListPageComponent } from './blogs-list-page/blogs-list-page.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'preview', component: BlogsListPageComponent },

  {
    path: 'blogs',
    children: [
      { path: 'details', component: BlogDetailsComponent },
      { path: 'new', component: BlogFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
