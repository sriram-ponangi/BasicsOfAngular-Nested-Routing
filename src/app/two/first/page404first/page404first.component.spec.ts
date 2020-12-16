import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page404firstComponent } from './page404first.component';

describe('Page404firstComponent', () => {
  let component: Page404firstComponent;
  let fixture: ComponentFixture<Page404firstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page404firstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page404firstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
