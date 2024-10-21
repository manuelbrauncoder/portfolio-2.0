import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthPopupComponent } from './growth-popup.component';

describe('GrowthPopupComponent', () => {
  let component: GrowthPopupComponent;
  let fixture: ComponentFixture<GrowthPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowthPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowthPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
