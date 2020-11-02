import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesUComponent } from './estudiantes-u.component';

describe('EstudiantesUComponent', () => {
  let component: EstudiantesUComponent;
  let fixture: ComponentFixture<EstudiantesUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiantesUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantesUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
