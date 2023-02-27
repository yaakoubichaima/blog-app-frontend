import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogFormComponent } from './components/blog-details/blog-form/blog-form.component';
import { BlogsListPageComponent } from './components/blogs-list-page/blogs-list-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'preview', component: BlogsListPageComponent },
  { path: 'new', component: BlogFormComponent },
  { path: 'details/:id', component: BlogDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
