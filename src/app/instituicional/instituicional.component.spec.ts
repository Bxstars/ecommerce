import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicionalComponent } from './instituicional.component';

describe('InstituicionalComponent', () => {
  let component: InstituicionalComponent;
  let fixture: ComponentFixture<InstituicionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituicionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstituicionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
