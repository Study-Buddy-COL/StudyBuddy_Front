import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInInputComponent } from './sign-in-input.component';

describe('SignInInputComponent', () => {
  let component: SignInInputComponent;
  let fixture: ComponentFixture<SignInInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
