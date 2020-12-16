import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page404twoComponent } from './page404two.component';

describe('Page404twoComponent', () => {
  let component: Page404twoComponent;
  let fixture: ComponentFixture<Page404twoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page404twoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page404twoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
