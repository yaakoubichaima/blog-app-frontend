import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogsListPageComponent } from './blogs-list-page/blogs-list-page.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'blogs', component: BlogsListPageComponent },
  {path: 'blogdetails', component: BlogDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
