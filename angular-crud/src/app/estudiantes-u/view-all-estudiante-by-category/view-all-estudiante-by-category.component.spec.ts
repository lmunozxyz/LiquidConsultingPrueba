import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllEstudianteByCategoryComponent } from './view-all-estudiante-by-category.component';

describe('ViewAllEstudianteByCategoryComponent', () => {
  let component: ViewAllEstudianteByCategoryComponent;
  let fixture: ComponentFixture<ViewAllEstudianteByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllEstudianteByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllEstudianteByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
