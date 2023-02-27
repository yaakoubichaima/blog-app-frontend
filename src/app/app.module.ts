import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogService } from './services/blog.service';
import { HttpClientModule } from '@angular/common/http';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogFormComponent } from './components/blog-details/blog-form/blog-form.component';
import { BlogVotesComponent } from './components/blog-votes/blog-votes.component';
import { BlogPreviewComponent } from './components/blogs-list-page/blog-preview/blog-preview.component';
import { BlogsListPageComponent } from './components/blogs-list-page/blogs-list-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppNavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    BlogsListPageComponent,
    BlogPreviewComponent,
    BlogDetailsComponent,
    BlogFormComponent,
    BlogVotesComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
