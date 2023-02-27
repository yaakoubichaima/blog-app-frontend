import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-navbar></app-navbar>
    <div style="margin-top: 50px;"><router-outlet></router-outlet></div>`,
})
export class AppComponent {
  title = 'blog-app';
}
