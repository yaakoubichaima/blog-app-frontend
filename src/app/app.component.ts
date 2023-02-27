import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-navbar></app-navbar>
    <div style="margin: 3% 10% 5% 10% ;"><router-outlet></router-outlet></div>`,
})
export class AppComponent {
  title = 'blog-app';
}
