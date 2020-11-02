import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllEstudianteComponent } from './view-all-estudiante.component';

describe('ViewAllEstudianteComponent', () => {
  let component: ViewAllEstudianteComponent;
  let fixture: ComponentFixture<ViewAllEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
