import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppNavbarComponent } from './navbar/navbar.component';
import { BlogsListPageComponent } from './blogs-list-page/blogs-list-page.component';
import { BlogPreviewComponent } from './blogs-list-page/blog-preview/blog-preview.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    BlogsListPageComponent,
    BlogPreviewComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
