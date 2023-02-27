import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsListPageComponent } from './blogs-list-page.component';

describe('BlogsListPageComponent', () => {
  let component: BlogsListPageComponent;
  let fixture: ComponentFixture<BlogsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
