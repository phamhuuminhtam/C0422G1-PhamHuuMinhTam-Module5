import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisComponent } from './form-regis.component';

describe('FormRegisComponent', () => {
  let component: FormRegisComponent;
  let fixture: ComponentFixture<FormRegisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
