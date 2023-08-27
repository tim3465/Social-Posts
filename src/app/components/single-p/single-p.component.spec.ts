import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePComponent } from './single-p.component';

describe('SinglePComponent', () => {
  let component: SinglePComponent;
  let fixture: ComponentFixture<SinglePComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePComponent]
    });
    fixture = TestBed.createComponent(SinglePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
