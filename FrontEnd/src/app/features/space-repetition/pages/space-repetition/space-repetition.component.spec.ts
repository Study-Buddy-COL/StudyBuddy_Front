import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceRepetitionComponent } from './space-repetition.component';

describe('SpaceRepetitionComponent', () => {
  let component: SpaceRepetitionComponent;
  let fixture: ComponentFixture<SpaceRepetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceRepetitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpaceRepetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
