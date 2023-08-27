import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialPComponent } from './social-p.component';

describe('SocialPComponent', () => {
  let component: SocialPComponent;
  let fixture: ComponentFixture<SocialPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialPComponent]
    });
    fixture = TestBed.createComponent(SocialPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
