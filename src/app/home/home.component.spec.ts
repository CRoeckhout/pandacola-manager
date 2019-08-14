import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLayout } from './home.component';

describe('HomeLayout', () => {
  let component: HomeLayout;
  let fixture: ComponentFixture<HomeLayout>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLayout ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
