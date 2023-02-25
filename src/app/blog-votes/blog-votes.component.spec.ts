import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogVotesComponent } from './blog-votes.component';

describe('BlogVotesComponent', () => {
  let component: BlogVotesComponent;
  let fixture: ComponentFixture<BlogVotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogVotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
