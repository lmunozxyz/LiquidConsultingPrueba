import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllEstudianteByDateComponent } from './view-all-estudiante-by-date.component';

describe('ViewAllEstudianteByDateComponent', () => {
  let component: ViewAllEstudianteByDateComponent;
  let fixture: ComponentFixture<ViewAllEstudianteByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllEstudianteByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllEstudianteByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
