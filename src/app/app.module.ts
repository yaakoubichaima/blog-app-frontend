import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppNavbarComponent } from './navbar/navbar.component';
import { BlogsListPageComponent } from './blogs-list-page/blogs-list-page.component';
import { BlogPreviewComponent } from './blogs-list-page/blog-preview/blog-preview.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogService } from './services/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    BlogsListPageComponent,
    BlogPreviewComponent,
    BlogDetailsComponent,
    BlogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
