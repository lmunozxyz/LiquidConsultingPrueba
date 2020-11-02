import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEstudianteComponent } from './view-estudiante.component';

describe('ViewEstudianteComponent', () => {
  let component: ViewEstudianteComponent;
  let fixture: ComponentFixture<ViewEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
